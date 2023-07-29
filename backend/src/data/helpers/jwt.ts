import jwt from "jsonwebtoken";

export class JwtService<T> {
  private secret = "edusantanaw2-3-x,";
  public async genToken(data: T) {
    const token = await new Promise((resolve) => {
      const generatedToken = jwt.sign(data as string, this.secret);
      resolve(generatedToken);
    });
    return token as string;
  }

  public async verify(token: string) {
    jwt.verify(token, this.secret);
  }
}
