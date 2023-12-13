/*
## JUGGLING ASYNC (Exercise 9 of 13)

  Create a file named juggling-async.js.

  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/

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
