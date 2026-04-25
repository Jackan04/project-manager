import { Request, Response, NextFunction } from "express";
import ApiError from "../config/ApiError.js";

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next(new ApiError(404, `Route ${req.method} ${req.path} not found`));
}

export default notFoundHandler;
