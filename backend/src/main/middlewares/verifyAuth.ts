import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../data/helpers/jwt";

const jwtService = new JwtService();

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).send("Acesso não permitido");
    const [_, token] = authorization.split(" ");
    if (!token) return res.status(401).send("Acesso não permitido");
    jwtService.verify(token);
    next();
  } catch (error) {
    return res.status(401).send("Acesso não permitido");
  }
};
