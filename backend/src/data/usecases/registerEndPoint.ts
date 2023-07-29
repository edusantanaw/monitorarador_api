import { EndPointEntity } from "../../domain/entities/EndPoint";

interface IRegisterEndPointUsecase {
  execute: (data: IEndPoint) => Promise<EndPoint>;
}

interface IUserRepository {
  loadById: (id: string) => Promise<unknown | null>;
}

interface IEndPointRepository {
  loadByRoute: (route: string) => Promise<EndPoint | null>;
  create: (data: EndPoint) => Promise<EndPoint>;
}

export class RegisterEndPointUsecase implements IRegisterEndPointUsecase {
  constructor(
    private readonly endPointRepository: IEndPointRepository,
    private readonly userRepository: IUserRepository
  ) {}
  public async execute(data: IEndPoint): Promise<EndPoint> {
    const userExists = await this.userRepository.loadById(data.userId);
    if (!userExists) throw new Error("Usuario não encontrado!");
    const endPointAlreadyExists = await this.endPointRepository.loadByRoute(
      data.route
    );
    if (endPointAlreadyExists) {
      throw new Error("está rota já esta registrada!");
    }
    const endPoint = new EndPointEntity(data);
    const newEndPoint = await this.endPointRepository.create(
      endPoint.getEndPoint
    );
    return newEndPoint;
  }
}
