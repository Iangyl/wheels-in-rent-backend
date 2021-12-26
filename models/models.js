const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.INTEGER },
})

const Personal = sequelize.define('personal', {
  birth: { type: DataTypes.DATE, allowNull: false },
  passport: { type: DataTypes.STRING, unique: true },
  code: { type: DataTypes.STRING, unique: true },
  tel: { type: DataTypes.STRING, unique: true, primaryKey: true, allowNull: false },
})

const Feedback = sequelize.define('feedback', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT },
  grade: { type: DataTypes.INTEGER },
})

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
})

const CarModel = sequelize.define('car_model', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  engine_power: { type: DataTypes.FLOAT },
  fuel_consumption: { type: DataTypes.FLOAT },
  fuel_type: { type: DataTypes.STRING },
  transmission: { type: DataTypes.STRING },
  max_speed: { type: DataTypes.FLOAT },
  trunk_volume: { type: DataTypes.FLOAT },
  body_type: { type: DataTypes.STRING },
  edition_year: { type: DataTypes.DATE },
  desc_text: { type: DataTypes.TEXT },
})

const ComfortType = sequelize.define('comfort_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
})

const Car = sequelize.define('car', {
  id_number: { type: DataTypes.STRING, primaryKey: true },
  price: { type: DataTypes.DECIMAL },
  img: { type: DataTypes.STRING }
})

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  start_date: { type: DataTypes.DATE },
  end_date: { type: DataTypes.DATE },
  comments: { type: DataTypes.TEXT },
})

User.hasOne(Personal)
Personal.belongsTo(User)

User.hasMany(Feedback)
Feedback.belongsTo(User)

// car tables relations
