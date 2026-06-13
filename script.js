const API_BASE = (window.__API_BASE__ || "").replace(/\/$/, "");

function apiPath(pathname) {
  return `${API_BASE}${pathname}`;
}

const DATA_URLS = [apiPath("/api/site"), "./data/site.json"];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value == null) continue;
    if (key === "class") node.className = value;
    else if (key === "html") node.innerHTML = value;
    else if (key.startsWith("data-")) node.setAttribute(key, value);
    else node[key] = value;
  }
  for (const child of [].concat(children)) {
    if (child == null) continue;
    node.append(child.nodeType ? child : document.createTextNode(String(child)));
  }
  return node;
}

function sectionHeading(index, title) {
  const heading = el("div", { class: "section-heading" }, [
    el("p", { class: "section-index" }, index),
    el("h2", {}, title),
  ]);
  return heading;
}

function makeLink(href, text) {
  const external = href.startsWith("http");
  const attrs = { href };
  if (external) {
    attrs.target = "_blank";
    attrs.rel = "noreferrer";
  }
  return el("a", attrs, text);
}

function renderHero(data) {
  const nav = el("nav", { class: "nav-links", "aria-label": "主导航" });
  data.nav.forEach((item) => nav.append(makeLink(item.href, item.label)));

  const contacts = el("div", { class: "hero-contacts" });
  data.contacts.forEach((item) => {
    const line = el("span");
    line.append(item.label + "：");
    if (item.href) line.append(makeLink(item.href, item.value));
    else line.append(item.value);
    contacts.append(line);
  });

  const hero = el("section", { class: "hero" }, [
    el("div", { class: "topnav" }, [
      el("div", { class: "brand" }, [
        el("span", { class: "brand-mark" }),
        el("span", {}, data.brand),
      ]),
      nav,
    ]),
    el("div", { class: "hero-top" }, [
      el("div", { class: "hero-title" }, [
        el("p", { class: "eyebrow" }, data.eyebrow),
        el("h1", {}, data.name),
        el("p", { class: "subtitle" }, data.subtitle),
        el("p", { class: "affiliation" }, data.affiliation),
      ]),
      contacts,
    ]),
    el("div", { class: "hero-summary" }, data.summary),
  ]);
  return hero;
}

function renderSimpleSection(section) {
  const root = el("section", { class: "section", id: section.id }, [
    sectionHeading(section.index, section.title),
    el("div", { class: "section-body" }),
  ]);
  const body = root.querySelector(".section-body");
  const list = el("div", { class: "simple-list" });
  section.items.forEach((item) => {
    const node = el("div", { class: "simple-item" }, [
      el("div", { class: "item-meta" }, item.meta),
      el("div", { class: "item-content" }, [
        el("h3", {}, item.title),
        item.text ? el("p", {}, item.text) : null,
      ]),
    ]);
    list.append(node);
  });
  body.append(list);
  return root;
}

function renderTwoColSection(section) {
  const root = el("section", { class: "section", id: section.id }, [
    sectionHeading(section.index, section.title),
    el("div", { class: "section-body" }),
  ]);
  const body = root.querySelector(".section-body");
  const grid = el("div", { class: "two-col" });
  section.panels.forEach((panel) => {
    const panelNode = el("div", { class: "panel" }, [
      el("h3", {}, panel.title),
      el("ul", { class: "bullet-list" }),
    ]);
    const ul = panelNode.querySelector("ul");
    panel.items.forEach((item) => ul.append(el("li", {}, item)));
    grid.append(panelNode);
  });
  body.append(grid);
  return root;
}

function renderPublications(section, publications) {
  const root = el("section", { class: "section", id: section.id }, [
    sectionHeading(section.index, section.title),
    el("div", { class: "section-body" }),
  ]);
  const body = root.querySelector(".section-body");
  const list = el("div", { class: "pub-list" });
  publications.forEach((pub) => {
    const bodyNode = el("div", { class: "pub-body" });
    bodyNode.append(el("h3", {}, pub.title));
    const meta = [];
    if (pub.journal) meta.push(pub.journal);
    if (pub.volume) meta.push(pub.volume);
    if (pub.pages) meta.push(pub.pages);
    const line = document.createElement("p");
    line.append(meta.filter(Boolean).join(pub.journal ? " · " : " "));
    if (pub.doi) {
      line.append(document.createTextNode(" · DOI: "));
      line.append(makeLink(`https://doi.org/${pub.doi}`, pub.doi));
    }
    if (pub.pdf) {
      line.append(document.createTextNode(" · "));
      line.append(makeLink(pub.pdf, "Papers"));
    }
    if (pub.note) {
      line.append(document.createTextNode(meta.length || pub.doi ? " · " : ""));
      line.append(pub.note);
    }
    bodyNode.append(line);

    const item = el("div", { class: "pub-item" }, [
      el("div", { class: "pub-year" }, pub.year),
      bodyNode,
    ]);
    list.append(item);
  });
  body.append(list);
  return root;
}

function renderProjects(section) {
  const root = el("section", { class: "section", id: section.id }, [
    sectionHeading(section.index, section.title),
    el("div", { class: "section-body" }),
  ]);
  const body = root.querySelector(".section-body");
  const list = el("div", { class: "project-list" });
  section.items.forEach((item) => {
    const details = el("details", { class: "project-item" });
    if (item.open) details.setAttribute("open", "");
    const summary = el("summary");
    summary.append(
      el("div", { class: "item-meta" }, item.meta),
      el("div", { class: "summary-title" }, item.title),
      el("div", { class: "summary-tag" }, item.tag)
    );
    const detail = el("div", { class: "project-detail" }, [
      el("p", {}, item.text),
      el("div", { class: "project-links" }, [makeLink(item.href, "项目详情和demo")]),
    ]);
    details.append(summary, detail);
    list.append(details);
  });
  body.append(list);
  return root;
}

function renderContact(section) {
  const root = el("section", { class: "section", id: section.id }, [
    sectionHeading(section.index, section.title),
    el("div", { class: "section-body" }),
  ]);
  const body = root.querySelector(".section-body");
  const panel = el("div", { class: "panel" });
  const ul = el("ul", { class: "bullet-list contact-list" });
  section.items.forEach((item) => {
    const li = el("li");
    li.append(item.label + "：");
    li.append(item.href ? makeLink(item.href, item.value) : item.value);
    ul.append(li);
  });
  panel.append(ul);
  body.append(panel);
  return root;
}

async function loadJson(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  return res.json();
}

async function loadData() {
  for (const url of DATA_URLS) {
    try {
      return await loadJson(url);
    } catch (_) {
      /* try next */
    }
  }
  throw new Error("Unable to load site data");
}

async function loadPublications(urls) {
  for (const url of urls) {
    try {
      return await loadJson(url);
    } catch (_) {
      /* try next */
    }
  }
  throw new Error("Unable to load publications");
}

async function init() {
  const app = document.getElementById("app");
  if (!app) return;
  app.textContent = "Loading...";
  const data = await loadData();
  const publications = await loadPublications([
    apiPath("/api/publications"),
    data.publicationsUrl,
    "./data/publications.json",
  ].filter(Boolean));

  app.replaceChildren(
    renderHero(data.hero),
    renderSimpleSection(data.sections.education),
    renderSimpleSection(data.sections.work),
    renderTwoColSection(data.sections.research),
    renderPublications(data.sections.publications, publications),
    renderProjects(data.sections.projects),
    renderTwoColSection(data.sections.patents),
    renderTwoColSection(data.sections.teaching),
    renderTwoColSection(data.sections.awards),
    renderContact(data.sections.contact)
  );
}

init().catch((error) => {
  const app = document.getElementById("app");
  if (app) {
    app.replaceChildren(el("div", { class: "panel" }, [
      el("h3", {}, "加载失败"),
      el("p", {}, `无法加载页面数据：${error.message}`),
    ]));
  }
  console.error(error);
});
