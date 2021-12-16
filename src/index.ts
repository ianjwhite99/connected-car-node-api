import * as dotenv from 'dotenv'
import serverless from 'serverless-http'
import app from './utils/app'

dotenv.config()

const { NODE_ENV, PORT } = process.env

if (NODE_ENV === 'local') {
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
  })
} else module.exports.handler = serverless(app)
