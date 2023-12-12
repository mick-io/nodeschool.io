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
