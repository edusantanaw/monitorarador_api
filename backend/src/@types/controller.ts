interface Controller<In> {
  handle: (data: In) => Promise<HttpResponse>;
}
