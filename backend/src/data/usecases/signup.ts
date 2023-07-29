import { UserEntity } from "../../domain/entities/User";

type IUser = {
  name: string;
  email: string;
  password: string;
};

interface ISignupUsecase {
  execute: (
    data: IUser
  ) => Promise<{ token: string; user: Omit<User, "password"> }>;
}

interface ISignupRepository {
  loadByEmail: (email: string) => Promise<User | null>;
  create: (data: User) => Promise<User>;
}

interface IGenHash {
  genHash: (pass: string) => Promise<string>;
}

interface ITokenGenerator<T> {
  genToken: (data: T) => Promise<string>;
}

export class SignupUsecase implements ISignupUsecase {
  constructor(
    private readonly userRepository: ISignupRepository,
    private readonly encrypter: IGenHash,
    private readonly jwtService: ITokenGenerator<Omit<User, "password">>
  ) {}
  public async execute(data: IUser) {
    const emailAlreadyUsed = await this.userRepository.loadByEmail(data.email);
    if (emailAlreadyUsed) throw new Error("Email já está sendo usado!");
    const user = new UserEntity(data);
    const hashedPassword = await this.encrypter.genHash(user.getPassword);
    user.setPassword = hashedPassword;
    const newUser = await this.userRepository.create(user.getUser);
    const { password, ...rest } = newUser;
    const token = await this.jwtService.genToken(rest);
    return { user: rest, token: token };
  }
}
