import bcrypt from "bcrypt";

export class Encrypter {
  private rounds: number = 10;
  public async genHash(password: string) {
    const salt = await bcrypt.genSalt(this.rounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
