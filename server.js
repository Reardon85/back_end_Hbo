const jsonServer = require("json-server"); // importing json-server library
const https = require('https');
const cors = require('cors');
const { appendFile } = require("fs");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001
setInterval(() => {
    https.get("https://hbomin.onrender.com");
  }, 300000); // every 5 minutes

server.use(middlewares);
server.use(router);
server.use(cors());
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "Origins, X-Requested-With, Content-Type, Accept, Authorization")
    next()
}) 
server.listen(port);