import { CreateController } from "../../../presentational/controller/create";
import { signupUsecaseFactory } from "../usecases/signup";

export function signupControllerFactory() {
  return new CreateController(signupUsecaseFactory());
}
