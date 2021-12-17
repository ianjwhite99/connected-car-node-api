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
 * @api {get} /vehicle/status Fetch Vehicle status
 */
vehicleRouter.get(
  '/status',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.query
      if (vin) {
        await status(vin.toString(), accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {get} /vehicle/authstatus Fetch Vehicle authorization status
 */
vehicleRouter.get(
  '/authstatus',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.query
      if (vin) {
        await authStatus(vin.toString(), accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
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
      if (vin) {
        await sendAuthorization(vin, accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
    } else next(new HttpException(401, 'Missing access token'))
  }
)

/**
 * @api {get} /vehicle/details Fetch Vehicle details
 */
vehicleRouter.get(
  '/details',
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      const accessToken = req.headers.authorization.split(' ')[1]
      const { vin } = req.query
      if (vin) {
        await details(vin.toString(), accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
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
      if (vin) {
        await wakeup(vin, accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
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
      if (vin) {
        await start(vin, accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
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
      if (vin) {
        await stop(vin, accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
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
      if (vin) {
        await unlock(vin, accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
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
      if (vin) {
        await lock(vin, accessToken)
          .then((result) => {
            res.status(200).json(result)
          })
          .catch((err: HttpException) => {
            next(err)
          })
      } else next(new HttpException(400, 'Malformed Request: VIN required'))
    } else next(new HttpException(401, 'Missing access token'))
  }
)

export default vehicleRouter
