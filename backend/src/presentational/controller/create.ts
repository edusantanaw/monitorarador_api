import { Created, ExceptionError } from "../helpers/httpResponse";

interface ICreateUsecase<In, Out> {
  execute: (data: In) => Promise<Out>;
}

// [TODO] Create a validion class
export class CreateController<In, Out> implements Controller<In> {
  constructor(private readonly createUsecase: ICreateUsecase<In, Out>) {}
  public async handle(data: In): Promise<HttpResponse> {
    try {
      const res = await this.createUsecase.execute(data);
      return Created(res);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
