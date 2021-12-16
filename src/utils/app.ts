import cors from 'cors'
import helmet from 'helmet'
import express from 'express'
import authRoutes from '../routes/auth.routes'
import userRoutes from '../routes/user.routes'
import vehicleRoutes from '../routes/vehicle.routes'
import errorHandler from '../middleware/error.middleware'
import notFoundHandler from '../middleware/notFound.middleware'

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/vehicle', vehicleRoutes)

app.use(errorHandler)
app.use(notFoundHandler)

export default app
