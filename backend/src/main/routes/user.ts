import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { signupControllerFactory } from "../factory/controller/signup";

export default (router: Router) => {
  router.post("/signup", expressAdapter(signupControllerFactory()));
};
