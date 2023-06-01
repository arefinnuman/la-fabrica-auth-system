import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

const databaseUrl = config.database_url as string
const usingPort = config.port

async function bootstrap() {
  try {
    await mongoose.connect(databaseUrl)
    console.log(`Database Connected`)

    app.listen(usingPort, () => {
      console.log(`La Fabrica running on port ${usingPort}`)
    })
  } catch (err) {
    console.log(`Failed to connect`, err)
  }
}
bootstrap()
