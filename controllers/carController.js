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
    const { id } = req.params
    
    const car = await Car.findByPk(id)
    return res.json({ message: 'Success!', car })
  }

  async newCar (req, res, next) {
    try {
      const { id_number, comfortTypeId, price, carModelId, carStatusId } = req.body
      const { img } = req.files
      const fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
  
      await Car.create({ id_number, carModelId, price, comfortTypeId, img: fileName, carStatusId }) // created model and test car create
      
      return res.json('Success!')
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async updateCar (req, res) {
    const { id } = req.params

    await Car.update(
      { ...req.body },
      { where: { id: id } }
    )

    return res.json('Success!')
  }

  async deleteCar (req, res) {
    const { id } = req.body
  
    await Car.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }
}

module.exports = new CarController()
