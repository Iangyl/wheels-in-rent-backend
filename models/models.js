const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
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

const UserStatus = sequelize.define('user_status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
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

const CarStatus = sequelize.define('car_status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Office = sequelize.define('office', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  location: { type: DataTypes.STRING },
})

const OrderStatus = sequelize.define('order_status', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  start_date: { type: DataTypes.DATE },
  end_date: { type: DataTypes.DATE },
  comments: { type: DataTypes.TEXT },
})

User.hasOne(Personal)
Personal.belongsTo(User)

UserStatus.hasMany(User)
User.belongsTo(UserStatus)

User.hasMany(Feedback)
Feedback.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Brand.hasMany(CarModel)
CarModel.belongsTo(Brand)

CarModel.hasMany(Car)
Car.belongsTo(CarModel)

ComfortType.hasMany(Car)
Car.belongsTo(ComfortType)

CarStatus.hasMany(Car)
Car.belongsTo(CarStatus)

Order.hasMany(Car)
Car.belongsTo(Order)

Office.hasMany(Order)
Order.belongsTo(Office)

OrderStatus.hasMany(Order)
Order.belongsTo(OrderStatus)

module.exports = {
  User,
  Personal,
  Feedback,
  Brand,
  ComfortType,
  CarModel,
  Car,
  Office,
  Order,
  UserStatus,
  CarStatus,
  OrderStatus,
}
