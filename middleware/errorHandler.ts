import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import AppError from "../utils/appError";

const errorHandler: ErrorRequestHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
export default errorHandler;
