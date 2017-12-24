/*

experimenting around with a roulette server
.... specifically
spinning up a Ruby server, a Node server, a Go server
and a php server. Then having my node server
randomly assign the request to one of servers
kind of like a load-balancer with absolutely no purpose
*/

const express = require("express");
const http = require("http");
const app = express();

/* SPIN UP CHILD SERVERS */
const util = require("util");
let { exec } = require("child_process");
exec = util.promisify(exec);
const get = util.promisify(http.get);

//TODO: try actually forwarding the request to some different servers
// const phpInit = "./servers/php";
const phpPort = 3009;
const php = async () => {
  await exec(`(cd ./servers/php && php -S localhost:${phpPort})`);
};
php();
//todo do the fancy file_path things
// const phpInit = "./servers/php_server.php";
// const php = async () => {
//   await exec(`php ${phpInit}`);
// };
// php();
// GO
// PHP
// RUBY
// OTHER NODE SERVER ???

/* ROUTES AND SUCH */
app.get("/*", async (req, res) => {
  //make a request to localhost:3009
  // const response = await get(`http://localhost:${phpPort}`);
  // console.log(response);
  http
    .get(`http://localhost:${phpPort}`, so => {
      let data;
      so.on("data", (err, stuff) => {
        data += stuff;
      });
      so.on("end", (err, stuff) => {
        console.log(data);
        return res.end(data);
      });
    })
    .on("error", err => {
      console.log(err);
    });
  // res.end(response);
});
/* SERVER THINGS */

const production = process.env.PORT ? true : false;
const host = "127.0.01";
const port = production ? process.env.PORT : "3000";

//server
app.listen(port, () => console.log("SET FUN TO STUN"));
