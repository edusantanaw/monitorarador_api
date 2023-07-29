import { randomUUID } from "node:crypto";
type data = {
  id?: string;
  name: string;
  email: string;
  password: string;
};

export class UserEntity {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  public get getUser(): User {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    };
  }

  public set setPassword(pass: string) {
    this.password = pass;
  }

  public get getPassword() {
    return this.password;
  }
}
