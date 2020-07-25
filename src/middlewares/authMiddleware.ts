import { Request, Response, NextFunction } from "express";
const isLogged = (request: Request, response: Response, next: NextFunction) => {
  if (!request.isAuthenticated()) {
    response.json({ res: "Not allowed" });
    return;
  }
  next();
};

export default isLogged;
