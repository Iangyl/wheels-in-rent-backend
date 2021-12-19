const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env

module.exports = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
  }
)
