import { Request, Response, NextFunction } from "express";
import ApiError from "../config/ApiError.js";

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next(new ApiError(`Route ${req.method} ${req.path} not found`, 404));
}

export default notFoundHandler;
