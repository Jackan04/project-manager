import ApiError from "../config/ApiError.js";
import { RequestHandler } from "express";

const notFoundHandler: RequestHandler = (req, res, next) => {
  next(new ApiError(404, `Route ${req.method} ${req.path} not found`));
};

export default notFoundHandler;
