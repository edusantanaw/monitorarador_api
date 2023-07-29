import prisma from "../prisma";

export class EndPointRepository {
  public async create(data: EndPoint) {
    const item = await prisma.endPoint.create({
      data,
    });
    return item as EndPoint;
  }

  public async loadByRoute(route: string) {
    const item = await prisma.endPoint.findFirst({
      where: {
        route,
      },
    });
    return item as EndPoint;
  }

  public async loadAll(data: pagination) {
    const items = await prisma.endPoint.findMany({
      take: Number(data.take ?? 50),
      skip: Number(data.take ?? 0) * Number(data.skip ?? 0),
    });
    const total = await prisma.endPoint.count();
    return { data: items as EndPoint[], total };
  }
}

export class EndPointRepositoryInMemory {
  private items: EndPoint[] = [];

  public async create(data: EndPoint) {
    this.items.push(data);
    return data;
  }

  public async loadByRoute(route: string) {
    const verifyRouteExists = this.items.filter((i) => i.route === route);
    if (verifyRouteExists.length > 0) return verifyRouteExists[0];
    return null;
  }
}
