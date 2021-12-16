import { Request, Response, NextFunction } from 'express'

const notFoundHandler = (
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  const error = 'NOT_FOUND'
  const message = 'The request resource could not be found.'

  response.status(404).json({
    status: 404,
    error,
    message,
  })
}

export default notFoundHandler
