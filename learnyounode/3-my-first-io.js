const fs = require("fs");

const [, , fpath] = process.argv;

if (!fpath) {
  throw new Error("No file path passed as argument");
}

const content = fs.readFileSync(fpath, "utf-8");
const nLines = content.split("\n").length - 1;

process.stdout.write(nLines + "\n");
