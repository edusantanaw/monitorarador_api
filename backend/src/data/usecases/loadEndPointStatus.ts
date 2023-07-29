import { ILoadAllRepository } from "../protocols/repository/loadAll";

interface data extends pagination {
  idEndPoint: string;
}
export class LoadEndPointStatusUsecase {
  constructor(
    private readonly loadAllEndPointRepository: ILoadAllRepository<
      EndPointStatus,
      data
    >
  ) {}
  public async execute(data: data) {
    const items = await this.loadAllEndPointRepository.loadAll(data);
    return items;
  }
}
