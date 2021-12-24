import connectedcar from 'connected-car'
import HttpException from '../common/http-exception'

/**
 * Fetch User info with access token
 * @param accessToken
 * @returns
 */
export const info = async (accessToken: string): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .info()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Fetch User messages with access token
 * @param accessToken
 * @returns
 */
export const getMessages = async (accessToken: string): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .getMessages()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Add new vehicle to user with passed VIN
 * @param vin
 * @param accessToken
 * @returns
 */
export const addVehicle = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .addVehicle(vin)
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Delete vehicle from user with passed VIN
 * @param vin
 * @param accessToken
 * @returns
 */
export const deleteVehicle = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .deleteVehicle(vin)
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Authorize request to access vehicle from another user
 * @param messageId
 * @param accessToken
 * @returns
 */
export const authorizeVehicle = async (
  messageId: string,
  accessToken: string
): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .authorizeVehicle(messageId)
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Request access to vehicle from user
 * @param vin
 * @param accessToken
 * @returns
 */
export const requestVehicleAccess = async (
  vin: string,
  accessToken: string
): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .requestVehicleAccess(vin)
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}

/**
 * Get list of user account vehicles
 * @param accessToken
 * @returns
 */
export const listVehicles = async (accessToken: string): Promise<any> => {
  const user = connectedcar.User(accessToken)
  return user
    .vehicles()
    .then((result) => result)
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
}
