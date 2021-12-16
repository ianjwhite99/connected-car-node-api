import syncconnect from 'syncconnect'
import HttpException from '../common/http-exception'

const scClient = syncconnect.AuthClient('9fb503e0-715b-47e8-adfd-ad4b7770f73b')

/**
 * Return user access token
 * @param username
 * @param password
 */
export const login = async (username: string, password: string): Promise<any> =>
  scClient
    .getAccessTokenFromCredentials({ username, password })
    .then((token) => {
      if (token) {
        return {
          accessToken: token.getValue(),
          refreshToken: token.getRefreshToken(),
          expiresIn: token.getExpiresAt(),
        }
      }
      throw new HttpException(
        500,
        'An unknown error occured while fetching user access token'
      )
    })
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })

/**
 * Exchange refresh token for access token
 * @param refreshToken
 * @returns
 */
export const exchangeRefreshToken = async (
  refreshToken: string
): Promise<any> =>
  scClient
    .getAccessTokenFromRefreshToken(refreshToken)
    .then((token) => {
      if (token) {
        return {
          accessToken: token.getValue(),
          refreshToken: token.getRefreshToken(),
          expiresIn: token.getExpiresAt(),
        }
      }
      throw new HttpException(
        500,
        'An unknown error occured while fetching user access token'
      )
    })
    .catch((err) => {
      throw new HttpException(err.SyncErrorStatus, err.SyncErrorMessage)
    })
