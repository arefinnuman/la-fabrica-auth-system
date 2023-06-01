import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
import { logger } from './app/config/logger'

const databaseUrl = config.database_url as string
const usingPort = config.port

async function bootstrap() {
  try {
    await mongoose.connect(databaseUrl)
    logger.info(`Database Connected`)

    app.listen(usingPort, () => {
      logger.info(`La Fabrica running on port ${usingPort}`)
    })
  } catch (err) {
    logger.error(`Failed to connect`, err)
  }
}
bootstrap()
