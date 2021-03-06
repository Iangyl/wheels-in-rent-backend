const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: 'USER', allowNull: false },
  password: { type: DataTypes.STRING },
})

const Personal = sequelize.define('personal', {
  birth: { type: DataTypes.DATE },
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

const FuelType = sequelize.define('fuel_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const BodyType = sequelize.define('body_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Transmission = sequelize.define('transmission', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const CarModel = sequelize.define('car_model', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  engine_power: { type: DataTypes.FLOAT },
  fuel_consumption: { type: DataTypes.FLOAT },
  max_speed: { type: DataTypes.FLOAT },
  trunk_volume: { type: DataTypes.FLOAT },
  edition_year: { type: DataTypes.DATE },
  desc_text: { type: DataTypes.TEXT },
})

const ComfortType = sequelize.define('comfort_types', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
})

const Car = sequelize.define('car', {
  id_number: { type: DataTypes.STRING, primaryKey: true },
  price: { type: DataTypes.DECIMAL },
  img: { type: DataTypes.STRING }
})

const CarStatus = sequelize.define('car_statuses', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Office = sequelize.define('office', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  location: { type: DataTypes.STRING },
})

const OrderStatus = sequelize.define('order_statuses', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  start_date: { type: DataTypes.DATE },
  end_date: { type: DataTypes.DATE },
  comments: { type: DataTypes.TEXT },
})

Personal.hasOne(User)
User.belongsTo(Personal)

UserStatus.hasMany(User)
User.belongsTo(UserStatus)

User.hasMany(Feedback)
Feedback.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Brand.hasMany(CarModel)
CarModel.belongsTo(Brand)

FuelType.hasMany(CarModel)
CarModel.belongsTo(FuelType)

BodyType.hasMany(CarModel)
CarModel.belongsTo(BodyType)

Transmission.hasMany(CarModel)
CarModel.belongsTo(Transmission)

CarModel.hasMany(Car)
Car.belongsTo(CarModel)

ComfortType.hasMany(Car)
Car.belongsTo(ComfortType)

CarStatus.hasMany(Car)
Car.belongsTo(CarStatus)

Car.hasMany(Order)
Order.belongsTo(Car)

Office.hasMany(Order)
Order.belongsTo(Office)

OrderStatus.hasMany(Order)
Order.belongsTo(OrderStatus)

module.exports = {
  User,
  Personal,
  Feedback,
  Brand,
  FuelType,
  BodyType,
  Transmission,
  ComfortType,
  CarModel,
  Car,
  Office,
  Order,
  UserStatus,
  CarStatus,
  OrderStatus,
}
