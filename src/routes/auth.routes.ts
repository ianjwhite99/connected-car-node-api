import express, { NextFunction, Request, Response } from 'express'
import HttpException from '../common/http-exception'
import { login, exchangeRefreshToken } from '../controllers/auth.controller'

const authRouter = express.Router()

/**
 * @api {post} /auth/fetchToken Fetch Login Token
 */
authRouter.post(
  '/fetchToken',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    if (email && password) {
      login(email, password)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(400, 'Missing required email or password'))
  }
)

/**
 * @api {post} /auth/refreshToken Fetch Access Token from Refresh Token
 */
authRouter.post(
  '/refreshToken',
  async (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.body
    if (refreshToken) {
      exchangeRefreshToken(refreshToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(400, 'Missing required refresh token'))
  }
)

export default authRouter
