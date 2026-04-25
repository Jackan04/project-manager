import { RequestHandler } from "express";
import ApiError from "../config/ApiError.js";

export const authorize: RequestHandler = (req, res, next) => {
  if (req.user?.id !== req.params.id) {
    return next(new ApiError(403, "Forbidden"));
  }
  next();
};
