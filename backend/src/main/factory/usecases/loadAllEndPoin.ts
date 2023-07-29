import { LoadAllUsecase } from "../../../data/usecases/loadAll";
import { EndPointRepository } from "../../../infra/repositories/endPoint";

export function loadAllEndPointUsecaseFactory() {
  return new LoadAllUsecase(new EndPointRepository());
}
