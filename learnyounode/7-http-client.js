/*
 ## HTTP CLIENT (Exercise 7 of 13)

  Create a file named http-client.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).
*/

const http = require("http");

const [, , urlString] = process.argv;
const url = new URL(urlString);

const req = http.get(url);

req.on("response", res => {
  res.setEncoding("utf-8");
  res.on("data", console.log);
  res.on("error", console.error);
});

req.on("error", console.error);
