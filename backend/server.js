const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const PUBLIC_DIRS = [ROOT];
const PORT = Number(process.env.PORT || 8787);

function sendJson(res, statusCode, payload) {
  const body = Buffer.from(JSON.stringify(payload, null, 2));
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": body.length,
    "Access-Control-Allow-Origin": "*",
  });
  res.end(body);
}

function sendText(res, statusCode, text, contentType = "text/plain; charset=utf-8") {
  const body = Buffer.from(text);
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Content-Length": body.length,
    "Access-Control-Allow-Origin": "*",
  });
  res.end(body);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function findStaticFile(urlPath) {
  const clean = urlPath.replace(/^\/+/, "");
  if (!clean || clean.endsWith("/")) {
    const htmlPath = path.join(ROOT, clean, "index.html");
    if (fs.existsSync(htmlPath)) return htmlPath;
  }

  const candidates = [
    path.join(ROOT, clean),
    path.join(ROOT, clean, "index.html"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".pdf":
      return "application/pdf";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

function serveStatic(res, filePath) {
  const body = fs.readFileSync(filePath);
  res.writeHead(200, {
    "Content-Type": contentType(filePath),
    "Content-Length": body.length,
    "Access-Control-Allow-Origin": "*",
  });
  res.end(body);
}

function routeApi(req, res, pathname) {
  if (pathname === "/api/site") {
    return sendJson(res, 200, readJson(path.join(DATA_DIR, "site.json")));
  }
  if (pathname === "/api/publications") {
    return sendJson(res, 200, readJson(path.join(DATA_DIR, "publications.json")));
  }
  if (pathname === "/health") {
    return sendJson(res, 200, { ok: true });
  }
  return false;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(url.pathname);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    });
    res.end();
    return;
  }

  if (pathname.startsWith("/api/") || pathname === "/health") {
    const handled = routeApi(req, res, pathname);
    if (handled !== false) return;
    return sendJson(res, 404, { error: "Not Found" });
  }

  for (const baseDir of PUBLIC_DIRS) {
    const filePath = findStaticFile(path.posix.normalize(path.posix.join("/", pathname)).slice(1));
    if (filePath) {
      return serveStatic(res, filePath);
    }
  }

  const fallback = path.join(ROOT, "index.html");
  if (fs.existsSync(fallback)) {
    return serveStatic(res, fallback);
  }
  return sendText(res, 404, "Not Found");
});

server.listen(PORT, () => {
  console.log(`Academic API server running at http://localhost:${PORT}`);
});
