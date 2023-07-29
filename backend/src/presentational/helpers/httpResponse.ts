function HttpResponse<T>(statusCode: number, body: T) {
  return {
    statusCode,
    body,
  };
}

const Ok = <T>(data: T) => HttpResponse(200, data);
const Created = <T>(data: T) => HttpResponse(201, data);
const BadRequest = <T>(data: T) => HttpResponse(400, data);

function ExceptionError(err: unknown) {
  const { message } = err as Error;
  return HttpResponse(400, message);
}

export  {
  Ok,
  BadRequest,
  HttpResponse,
  Created,
  ExceptionError,
};
