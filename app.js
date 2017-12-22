/*
using greenlock for ssl
*/

/*
cheating / basic example
...that doesn't work
*/
//
// "use strict";
//
// require("greenlock-express")
//   .create({
//     server: "staging",
//
//     email: "horatiofox0@gmail.com",
//
//     agreeTos: true,
//
//     approveDomains: ["127.0.0.1:8000"],
//
//     app: require("express")().use("/", function(req, res) {
//       res.end("Hello, World!");
//     })
//   })
//   .listen(80, 443);
/*
self-signed https example
*/
