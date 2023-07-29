import express from "express";
import dotenv from "./config/dotenv";
import routes from "./routes";
import task from "./task";

dotenv();

class Server {
  private app = express();
  private port = process.env.PORT;
  private middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private start() {
    const cb = () => console.log("Server running at " + this.port);
    this.app.listen(this.port, cb);
  }

  public bootstrap() {
    this.middlewares();
    routes(this.app);
    task();
    this.start();
  }
}

const server = new Server();

server.bootstrap();
