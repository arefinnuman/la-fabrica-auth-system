import cors from 'cors'
import express from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app = express()

// MiddleWares
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Error Handling
app.use(globalErrorHandler)

// Application routes
app.use('/api/v1/users/', UserRoutes)

export default app
