const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const sequelize = require('./db')


const PORT = process.env.PORT || 5000

const app = express()

const start = () => {
  try {
    await sequelize.authenticate() // connection 
    await sequelize.sync() // sync db with data shema
    app.listen(PORT, () => console.log(`SERVER WAS STARTED ON PORT ${PORT}`))
  } catch (error) {
    console.error(error)
  }
}

start()
