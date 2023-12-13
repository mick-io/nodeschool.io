/*
 ## HTTP UPPERCASERER (Exercise 12 of 13)

  Create a file named http-uppercaserer.js.

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
  */

const http = require("http");
const map = require("through2-map");

const [, , PORT] = process.argv;

const server = new http.Server((req, res) => {
  if (req.method !== "POST") {
    return;
  }

  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(PORT);
