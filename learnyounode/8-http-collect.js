const http = require("http");

const [, , urlString] = process.argv;

const url = new URL(urlString);
const req = http.get(url);
const data = [];

req.on("error", console.error);

req.on("response", res => {
  res.setEncoding("utf-8");
  res.on("error", console.error);
  res.on("data", chunk => data.push(chunk));
});

req.on("close", () => {
  const s = data.join("");
  console.log(s.length);
  console.log(s);
});
