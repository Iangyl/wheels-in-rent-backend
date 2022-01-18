const uuid = require('uuid')
const path = require('path')
const { Car, CarModel } = require('./../models/models')
const ApiError = require('../error/ApiError')
const { returnFilterAttributes } = require('../transformers')

const findMethod = async (params1, params2, limit, offset) => {
  const comfortTypeId = Object.keys(params2).length !== 0 ? params2.comfortTypeId : null
  let result

  if (comfortTypeId && Object.keys(params1).length !== 0) {
    result = await Car.findAll({
      where: { comfortTypeId: comfortTypeId },
      include: [
        {
          model: CarModel,
          where: {
            ...params1
          }
        }
      ],
      limit,
      offset
    })
  } else if (!comfortTypeId && Object.keys(params1).length !== 0) {
    result = await Car.findAll({
      where: { },
      include: [
        {
          model: CarModel,
          where: {
            ...params1
          }
        }
      ],
      limit,
      offset
    })
  } else {
    result = await Car.findAll({ limit, offset })
  }

  return result
}

class CarController {
  async getCars (req, res) {
    let { brandId, comfortTypeId, bodyTypeId, limit, page } = req.query
    brandId = brandId || null
    comfortTypeId = comfortTypeId || null
    bodyTypeId = bodyTypeId || null
  
    page = page || 1
    limit = limit || 9
    const offset = page * limit - limit

    // work here
    const params1 = returnFilterAttributes({ brandId, bodyTypeId })
    const params2 = returnFilterAttributes({ comfortTypeId })

    const cars = await findMethod(params1, params2, limit, offset)

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
