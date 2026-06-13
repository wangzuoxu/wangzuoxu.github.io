const fs = require("fs");
const path = require("path");

const sitePath = path.resolve(__dirname, "../../data/site.json");

module.exports = JSON.parse(fs.readFileSync(sitePath, "utf8"));
