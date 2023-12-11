const fs = require("fs");
const path = require("path");

const [, , dirpath, ext] = process.argv;

if (!dirpath || !ext) {
  throw new Error("directory path or extension arguments not passed");
}

fs.readdir(dirpath, "utf8", (err, filepaths) => {
  if (err) {
    console.error(err);
  }

  const filtered = filepaths
    .filter(f => path.extname(f) === `.${ext}`)
    .join("\n");

  process.stdout.write(filtered + "\n");
});
