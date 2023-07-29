import { RegisterEndPointUsecase } from "../../../data/usecases/registerEndPoint";
import { EndPointRepository } from "../../../infra/repositories/endPoint";
import { UserRepository } from "../../../infra/repositories/userRepository";

export function registerEndPointUsecaseFactory() {
  const endPointRepository = new EndPointRepository();
  const userRepository = new UserRepository();
  return new RegisterEndPointUsecase(endPointRepository, userRepository);
}
