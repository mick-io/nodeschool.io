const http = require("http");

const urls = process.argv.slice(2).map(s => new URL(s));

const request = urls.map(url => {
  return new Promise((resolve, reject) => {
    const req = http.get(url, res => {
      let content = "";
      res.setEncoding("utf-8");
      res.on("data", chunk => (content += chunk));
      res.on("end", () => resolve(content));
      res.on("error", err => reject(`Error on response from ${url}: ${err}`));
    });

    req.on("error", err => reject(`Error on request from ${url}: ${err}`));
  });
});

Promise.all(request)
  .then(contents => contents.forEach(c => console.log(c)))
  .catch(err => console.error(err));
