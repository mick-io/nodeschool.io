const filterFn = require("./mymodule");

const [, , dirpath, ext] = process.argv;

if (!dirpath || !ext) {
  throw new Error("directory path or extension arguments not passed");
}

filterFn(dirpath, ext, (err, filtered) => {
  if (err) {
    console.error(err);
  } else {
    console.log(filtered.join("\n"));
  }
});
