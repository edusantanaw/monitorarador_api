import { LoadAllController } from "../../../presentational/controller/loadAll";
import { loadAllEndPointStatusUsecaseFactory } from "../usecases/loadAllEndPointStatus";

export function loadAllEndPointStatusControllerFactory() {
  return new LoadAllController(loadAllEndPointStatusUsecaseFactory());
}
