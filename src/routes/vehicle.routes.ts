import express, { NextFunction, Request, Response } from 'express'
import {
  authStatus,
  details,
  lock,
  sendAuthorization,
  start,
  status,
  stop,
  unlock,
  wakeup,
} from '../controllers/vehicle.controller'
import HttpException from '../common/http-exception'

const vehicleRouter = express.Router()

/**
 * @api {get} /vehicle/status/:vin Fetch Vehicle status
 */
vehicleRouter.get(
  '/status/:vin',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.params
      await status(vin, accessToken)
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
 * @api {get} /vehicle/authstatus/:vin Fetch Vehicle authorization status
 */
vehicleRouter.get(
  '/authstatus/:vin',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.params
      await authStatus(vin, accessToken)
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
 * @api {post} /vehicle/sendAuth Send vehicle authorization request
 */
vehicleRouter.post(
  '/sendAuth',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await sendAuthorization(vin, accessToken)
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
 * @api {get} /vehicle/details/:vin Fetch Vehicle details
 */
vehicleRouter.get(
  '/details/:vin',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.params
      await details(vin, accessToken)
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
 * @api {post} /vehicle/wakeup Send vehicle wakeup request
 */
vehicleRouter.post(
  '/wakeup',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await wakeup(vin, accessToken)
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
 * @api {post} /vehicle/start Send vehicle start request
 */
vehicleRouter.post(
  '/start',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await start(vin, accessToken)
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
 * @api {post} /vehicle/stop Send vehicle stop request
 */
vehicleRouter.post(
  '/stop',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await stop(vin, accessToken)
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
 * @api {post} /vehicle/unlock Send vehicle unlock request
 */
vehicleRouter.post(
  '/unlock',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await unlock(vin, accessToken)
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
 * @api {post} /vehicle/lock Send vehicle lock request
 */
vehicleRouter.post(
  '/lock',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.body
      await lock(vin, accessToken)
        .then((result) => {
          res.status(200).json(result)
        })
        .catch((err: HttpException) => {
          next(err)
        })
    } else next(new HttpException(401, 'Missing access token'))
  }
)

export default vehicleRouter
