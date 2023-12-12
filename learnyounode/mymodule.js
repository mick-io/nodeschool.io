const fs = require("fs");
const path = require("path");

/**
 * Filters files in a directory by extension and calls a callback with the filtered files.
 *
 * @param {string} dirpath - The path to the directory.
 * @param {string} ext - The file extension to filter by.
 * @param {function} callback - The callback to call with the filtered files.
 */
module.exports = function (dirpath, ext, callback) {
  fs.readdir(dirpath, "utf8", (err, filepaths) => {
    if (err) return callback(err);

    const filtered = filepaths.filter(f => path.extname(f) === `.${ext}`);

    callback(null, filtered);
  });
};
