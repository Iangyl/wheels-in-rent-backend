const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = require('./db')
const cors = require('cors')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/v1', router)

// last in queue
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate() // connection 
    await sequelize.sync() // sync db with data shema
    app.listen(PORT, () => console.log(`SERVER WAS STARTED ON PORT ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}

start()
