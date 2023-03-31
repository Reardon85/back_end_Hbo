const jsonServer = require("json-server"); // importing json-server library
const https = require('https');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001
setInterval(() => {
    https.get("https://hbomin.onrender.com");
  }, 300000); // every 5 minutes

server.use(middlewares);
server.use(router);

server.listen(port);