import { EndPointStatusRepository } from "./../../../infra/repositories/endPointStatus";
import { LoadEndPointStatusUsecase } from "../../../data/usecases/loadEndPointStatus";

export function loadAllEndPointStatusUsecaseFactory() {
  return new LoadEndPointStatusUsecase(new EndPointStatusRepository());
}
