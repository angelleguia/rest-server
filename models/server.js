const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parsing and body reading
    this.app.use(express.json());

    //Public dir
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App running on port ", this.port);
    });
  }
}

module.exports = Server;
