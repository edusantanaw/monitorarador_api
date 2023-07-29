import { Encrypter } from "../../../data/helpers/encrypter";
import { JwtService } from "../../../data/helpers/jwt";
import { SignupUsecase } from "../../../data/usecases/signup";
import { UserRepository } from "../../../infra/repositories/userRepository";

export function signupUsecaseFactory(){
    const userRepository = new UserRepository();
    const encrypter = new Encrypter();
    const jwtService = new JwtService()
    return new SignupUsecase(userRepository, encrypter, jwtService)
}