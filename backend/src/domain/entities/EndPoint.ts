import { randomUUID } from "node:crypto";

type data = {
  id?: string;
  route: string;
  headers: unknown;
  userId: string;
};

export class EndPointEntity {
  private id: string;
  private route: string;
  private headers: string;
  private userId: string;
  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.route = data.route;
    this.headers = JSON.stringify(data.headers);
    this.userId = data.userId;
  }

  public get getEndPoint(): EndPoint {
    return {
      headers: this.headers,
      id: this.id,
      route: this.route,
      userId: this.userId,
    };
  }
}
