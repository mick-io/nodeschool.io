/*
 ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

  Create a file named my-first-async-io.js.

  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument.
*/

const fs = require("fs");

const [, , fpath] = process.argv;

if (!fpath) {
  throw new Error("No file path passed");
}

fs.readFile(fpath, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  const nLines = data.split("\n").length - 1;
  process.stdout.write(nLines + "\n");
});
