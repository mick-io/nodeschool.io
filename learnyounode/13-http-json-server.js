/*
 ## HTTP JSON API SERVER (Exercise 13 of 13)

  Create a file named http-json-api-server.js.

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
*/

const http = require("http");
const url = require("url");

const [, , PORT] = process.argv;

const PARSE_TIME_ROUTE = "/api/parsetime";
const UNIX_TIME_ROUTE = "/api/unixtime";

const server = new http.Server((req, res) => {
  if (req.method !== "GET") return;

  const { query, pathname } = url.parse(req.url, true);
  const date = new Date(query.iso.toString());

  let header = { "Content-Type": "application/json" };
  let statusCode = 200;
  let result;

  switch (pathname) {
    case PARSE_TIME_ROUTE:
      result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
      break;
    case UNIX_TIME_ROUTE:
      result = { unixtime: date.getTime() };
      break;
    default:
      statusCode = 404;
      header = null;
  }

  res.writeHead(statusCode, header);
  res.end(JSON.stringify(result));
});

server.listen(+PORT);
