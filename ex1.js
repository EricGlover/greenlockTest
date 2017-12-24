/*
experimenting around with self signed certificates
*/

const express = require("express");
const app = express();
const http = require("http");
const https = require("https");

/* routes */
const fs = require("fs");
app.get("/form", (req, res) => {
  /*being old school today for some reason */
  //no templating engine for this guy
  const file = fs.readFileSync("./views/index.html");
  res.end(file);
});
/* let's run a php file with node */
app.get("/php", (req, res) => {
  // let's try spawing a child process to run our php scripts
  const { exec } = require("child_process");
  let php = new Promise((resolve, reject) => {
    exec("php ./views/index.php", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        reject(error);
      }
      resolve({ stdout, stderr });
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  })
    .then(php => {
      return res.end(php.stdout);
    })
    .catch(e => {
      return res.end(e);
    });

  // const file = fs.readFileSync("./views/index.php");
  // res.end(file);
});
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
// const fs = require("fs");

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./certificate.pem")
};
//
// console.log(fs.readFileSync("./certificate.pem"));
// app.listen(port, host, () => console.log(`listening on ${host}:${port}`));

if (production) {
  http
    .createServer(app)
    .listen(port, () => console.log(`listening on ${host}:${port}`));
  // https
  //   .createServer(options, app)
  //   .listen(port, () => console.log(`secure, listening on ${port1}`));
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
