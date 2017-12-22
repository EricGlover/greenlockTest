const express = require("express");
const app = express();
const http = require("http");
const https = require("https");

app.get("/", (req, res) => {
  res.end("hello no encryption yet");
});

const host = "127.0.01";
const port = "3000";
const port1 = "8080";

// app.listen(port, host, () => console.log(`listening on ${host}:${port}`));
http
  .createServer(app)
  .listen(port, host, () => console.log(`listening on ${host}:${port}`));
https
  .createServer(app)
  .listen(port1, host, () =>
    console.log(`secure, listening on ${host}:${port1}`)
  );
