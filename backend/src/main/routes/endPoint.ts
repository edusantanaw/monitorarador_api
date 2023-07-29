import { Router } from "express";
import expressAdapter from "../adapters/expressAdapter";
import { registerEndPointController } from "../factory/controller/registerEndPoint";
import verifyAuth from "../middlewares/verifyAuth";
import { loadAllEndPointControllerFactory } from "../factory/controller/loadAllEndPoint";
import { loadAllEndPointStatusControllerFactory } from "../factory/controller/loadAllEndPointStatus";

export default (router: Router) => {
  router.get(
    "/endpoint",
    verifyAuth,
    expressAdapter(loadAllEndPointControllerFactory())
  );
  router.post(
    "/endpoint",
    verifyAuth,
    expressAdapter(registerEndPointController())
  );
  router.get(
    "/endpoint/status/:idEndPoint",
    verifyAuth,
    expressAdapter(loadAllEndPointStatusControllerFactory())
  );
};
