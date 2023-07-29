import { ILoadAllUsecase } from "../../domain/usecases/loadAll";
import { ExceptionError, Ok } from "../helpers/httpResponse";

export class LoadAllController<In extends pagination, Out>
  implements Controller<In>
{
  constructor(private readonly loadAllUsecase: ILoadAllUsecase<Out, In>) {}
  public async handle(data: In): Promise<HttpResponse> {
    try {
      const res = await this.loadAllUsecase.execute(data);
      return Ok(res);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
