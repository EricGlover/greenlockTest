const express = require("express");
const app = express();
const http = require("http");
const https = require("https");

app.get("/*", (req, res) => {
  console.log("req occurred ");
  res.end("hello no encryption yet");
});
const production = process.env.PORT ? true : false;
console.log(`port = ${process.env.PORT}`);
const host = "127.0.01";
const port = production ? process.env.PORT : "3000";
const port1 = process.env.PORT || "8080";

//get cert and key
const fs = require("fs");

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./certificate.pem")
};
//
// console.log(fs.readFileSync("./certificate.pem"));
// app.listen(port, host, () => console.log(`listening on ${host}:${port}`));

if (production) {
  // http
  //   .createServer(app)
  //   .listen(port, () => console.log(`listening on ${host}:${port}`));
  https
    .createServer(options, app)
    .listen(port, () => console.log(`secure, listening on ${port1}`));
} else {
  http
    .createServer(app)
    .listen(port, host, () => console.log(`listening on ${host}:${port}`));
  https
    .createServer(app)
    .listen(port1, host, () =>
      console.log(`secure, listening on ${host}:${port1}`)
    );
}
