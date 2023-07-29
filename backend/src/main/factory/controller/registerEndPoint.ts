import { CreateController } from "../../../presentational/controller/create";
import { registerEndPointUsecaseFactory } from "../usecases/registerEndPoint";

export function registerEndPointController() {
  return new CreateController(registerEndPointUsecaseFactory());
}
