const uuid = require('uuid')
const path = require('path')
const { Car } = require('./../models/models')
const ApiError = require('../error/ApiError')

class CarController {
  async getCars (req, res) {
    
  }

  async getCar (req, res) {

  }

  async newCar (req, res, next) {
    try {
      const { car_number, comfort, price, model_id } = req.body
      const { img } = req.files
      const fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      await Car.create({ id_number: car_number, carModelId: model_id, price, comfortTypeId: comfort, img: fileName, carStatusId: 1 }) // created model and test car create
      
      res.json('Ok!')
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async updateCar (req, res) {

  }

  async deleteCar (req, res) {

  }
}

module.exports = new CarController()
