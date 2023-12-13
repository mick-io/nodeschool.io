/*
## HTTP FILE SERVER (Exercise 11 of 13)
  Create a file named http-file-server.js.

  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/

const http = require("http");
const fs = require("fs");

const [, , PORT, FILE_PATH] = process.argv;

const server = new http.Server((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  fs.createReadStream(FILE_PATH).setEncoding("utf-8").pipe(res);
});

server.listen(PORT);
