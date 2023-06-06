import cors from 'cors'
import express from 'express'
import globalErrorHandler from './app/modules/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.routes'

const app = express()

// MiddleWares
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)

// Testing Routes

// Error Handling
app.use(globalErrorHandler)

export default app
