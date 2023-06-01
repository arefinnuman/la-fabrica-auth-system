import cors from 'cors'
import express, { Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/users.route'

const app = express()

// middlewares
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes

app.use('/api/v1/users/', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Madridistaaa!')
})

app.use(globalErrorHandler)

export default app
