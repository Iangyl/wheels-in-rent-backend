const uuid = require('uuid')
const path = require('path')
const { Car } = require('./../models/models')
const ApiError = require('../error/ApiError')

class CarController {
  async getCars (req, res) {
    const cars = await Car.findAll()
    return res.json({ message: 'Success!', cars })
  }

  async getCar (req, res) {
    const { id } = req.query
    
    const car = await Car.findByPk(id)
    return res.json({ message: 'Success!', car })
  }

  async newCar (req, res, next) {
    try {
      const { car_number, comfort, price, model_id } = req.body
      const { img } = req.files
      const fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      await Car.create({ id_number: car_number, carModelId: model_id, price, comfortTypeId: comfort, img: fileName, carStatusId: 1 }) // created model and test car create
      
      return res.json('Success!')
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async updateCar (req, res) {
    const { id } = req.query

    await Car.update(
      { ...req.body },
      { where: { id: id } }
    )

    return res.json('Success!')
  }

  async deleteCar (req, res) {
    const { id } = req.query
  
    await Car.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }
}

module.exports = new CarController()
