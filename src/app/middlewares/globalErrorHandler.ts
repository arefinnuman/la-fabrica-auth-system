import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ Error: err })
  next()
}

export default globalErrorHandler
