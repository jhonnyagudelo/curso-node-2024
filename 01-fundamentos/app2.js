const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

console.log(data);

const newData = data.replace(/React/gi, "Angular");

fs.writeFileSync("README-AN.md", newData);
