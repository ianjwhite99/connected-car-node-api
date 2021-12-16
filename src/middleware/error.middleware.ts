import { Request, Response, NextFunction } from 'express'
import HttpException from '../common/http-exception'

const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  const status = error.statusCode || error.status || 500
  response.status(status).send({
    status,
    message: error.message,
  })
}

export default errorHandler
