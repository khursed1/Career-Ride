import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function signin_check(req: Request, res: Response, next: NextFunction) {
  const { accessToken } = req.cookies;

  if (!accessToken) return;

  const decoded_token = jwt.verify(accessToken, process.env.TOKEN_SECRET!) as {
    id: string;
  };

  if (!decoded_token.id) return;
  req.id = decoded_token.id;

  next();
}
