import { LoadAllController } from "../../../presentational/controller/loadAll";
import { loadAllEndPointUsecaseFactory } from "../usecases/loadAllEndPoin";

export function loadAllEndPointControllerFactory() {
  return new LoadAllController(loadAllEndPointUsecaseFactory());
}
