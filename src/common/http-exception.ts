export default class HttpException extends Error {
  public statusCode?: number

  public status?: number

  public message: string

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.message = message
  }
}
