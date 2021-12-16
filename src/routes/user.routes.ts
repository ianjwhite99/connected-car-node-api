import express, { NextFunction, Request, Response } from 'express'
import HttpException from '../common/http-exception'
import {
  addVehicle,
  authorizeVehicle,
  deleteVehicle,
  getMessages,
  info,
  listVehicles,
  requestVehicleAccess,
} from '../controllers/user.controller'

const userRouter = express.Router()

/**
 * @api {get} /user/info Fetch User Info
 */
userRouter.get(
  '/info',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      await info(accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {get} /user/messages Fetch User Messages
 */
userRouter.get(
  '/messages',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      await getMessages(accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {get} /user/vehicle List all user vehicles
 */
userRouter.get(
  '/vehicle',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      await listVehicles(accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {post} /user/vehicle Add new user vehicle
 */
userRouter.post(
  '/vehicle',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.body.vin) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await addVehicle(vin, accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {delete} /user/vehicle Remove user vehicle
 */
userRouter.delete(
  '/vehicle',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.body.vin) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await deleteVehicle(vin, accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {post} /user/authorizeVehicle Authorize user vehicle access request
 */
userRouter.post(
  '/authorizeVehicle',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.body.messageId) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { messageId } = req.body
      await authorizeVehicle(messageId, accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {post} /user/requestVehicleAccess Request access to another user vehicle
 */
userRouter.post(
  '/requestVehicleAccess',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.body.messageId) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await requestVehicleAccess(vin, accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

export default userRouter
