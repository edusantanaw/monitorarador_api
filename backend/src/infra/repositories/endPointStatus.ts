import prisma from "../prisma";

interface data extends pagination {
  idEndPoint: string;
}
export class EndPointStatusRepository {
  public async create(data: EndPointStatus) {
    const item = await prisma.endPointStatus.create({
      data: data,
    });
    return item;
  }

  public async loadAll(data: data) {
    const items = await prisma.endPointStatus.findMany({
      take: Number(data.take ?? 50),
      skip: Number(data.take ?? 0) * Number(data.skip ?? 0),
      where: {
        idEndPoint: data.idEndPoint,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const total = await prisma.endPointStatus.count({
      where: {
        idEndPoint: data.idEndPoint,
      },
    });
    return { data: items as any[], total };
  }
}
