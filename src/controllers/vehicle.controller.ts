import syncconnect from 'syncconnect'
import HttpException from '../common/http-exception'

/**
 * Fetch vehicle status based on passed vin
 * @param vin
 * @param accessToken
 * @returns
 */
export const status = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .status()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Get vehicle authorization status based on passed vin
 * @param vin
 * @param accessToken
 * @returns
 */
export const authStatus = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .authorizationStatus()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Send a vehicle authorzation request based on passed vin
 * @param vin
 * @param accessToken
 * @returns
 */
export const sendAuthorization = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .sendAuthorization()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Fetch vehicle details based on passed vin
 * @param vin
 * @param accessToken
 * @returns
 */
export const details = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .details()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Send wakeup request to vehicle
 * @param vin
 * @param accessToken
 * @returns
 */
export const wakeup = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .wakeup()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Attempt to start vehicle engine
 * @param vin
 * @param accessToken
 * @returns
 */
export const start = async (vin: string, accessToken: string): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .start()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Attempts to stop vehicle engine
 * @param vin
 * @param accessToken
 * @returns
 */
export const stop = async (vin: string, accessToken: string): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .stop()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Attempt to lock vehicle doors
 * @param vin
 * @param accessToken
 * @returns
 */
export const lock = async (vin: string, accessToken: string): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .lock()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Attempt to unlock vehicle doors
 * @param vin
 * @param accessToken
 * @returns
 */
export const unlock = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const vehicle = syncconnect.Vehicle(vin, accessToken)
  return vehicle
    .unlock()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}
