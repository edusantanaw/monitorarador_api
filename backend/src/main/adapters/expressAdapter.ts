import { Request, Response } from "express";

export default <In>(controller: Controller<In>) => {
  return async (req: Request, res: Response) => {
    try {
      const { body, statusCode } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(statusCode).json(body);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Internal server error!");
    }
  };
};
