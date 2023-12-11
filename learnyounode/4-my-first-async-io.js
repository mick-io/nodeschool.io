const fs = require("fs");

const [, , fpath] = process.argv;

if (!fpath) {
  throw new Error("No file path passed");
}

fs.readFile(fpath, "utf-8", (err, data) => {
  if (err) throw err;
  const nLines = data.split("\n").length - 1;
  process.stdout.write(nLines + "\n");
});
