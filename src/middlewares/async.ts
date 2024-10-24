import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.config";

export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((err) => {
      logger.error(JSON.stringify(err));
      next(err);
    });