type IEndPoint = {
  route: string;
  headers: unknown;
  userId: string;
};

type EndPoint = {
  id: string;
  userId: string;
  route: string;
  headers: string;
};

type status = "online" | "offline";

type EndPointStatus = {
  id: string;
  createdAt?: string;
  status: status;
  idEndPoint: string;
};
