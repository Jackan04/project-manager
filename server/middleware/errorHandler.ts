import { ErrorRequestHandler } from "express";
import ApiError from "../config/ApiError.js";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message });
  }

  res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
