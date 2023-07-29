import { ILoadAllUsecase } from "../../domain/usecases/loadAll";
import { ILoadAllRepository } from "../protocols/repository/loadAll";

export class LoadAllUsecase<T> implements ILoadAllUsecase<T, pagination> {
  constructor(
    private readonly loadAllRepository: ILoadAllRepository<T, pagination>
  ) {}
  public async execute(
    data: pagination
  ): Promise<{ total: number; data: T[] }> {
    const res = await this.loadAllRepository.loadAll(data);
    return res;
  }
}
