import * as dotenv from 'dotenv'
import serverless from 'serverless-http'
import app from './utils/app'

dotenv.config()

const { NODE_ENV, PORT } = process.env

if (NODE_ENV === 'local' || !NODE_ENV) {
  app.listen(PORT || 3000, () => {
    console.log(`Listening at http://localhost:${PORT || 3000}`)
  })
} else module.exports.handler = serverless(app)
