import { Request, Response, NextFunction } from 'express';

export default class IndexController {
  public static getIndex(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    try {
      res.json({
        message: 'Welcome to the Express API in TypeScript',
      });
    } catch (error) {
      next(error);
    }
  }
}
