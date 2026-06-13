const fs = require("fs");
const path = require("path");

const publicationsPath = path.resolve(__dirname, "../../data/publications.json");

module.exports = JSON.parse(fs.readFileSync(publicationsPath, "utf8"));
