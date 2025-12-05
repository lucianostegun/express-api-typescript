import { Request, Response } from 'express';
import IndexController from '../src/controllers/IndexController';

describe('IndexController', () => {
  it('should return a welcome message', () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    IndexController.getIndex(req, res, jest.fn());

    expect(res.json).toHaveBeenCalledWith({
      message: 'Welcome to the Express API in TypeScript',
    });
  });
});
