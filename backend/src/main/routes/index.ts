import { Router, Express } from "express";
import endPoint from "./endPoint";
import user from "./user";

const router = Router();

export default (app: Express) => {
  endPoint(router);
  user(router);
  app.use("/", router);
};
