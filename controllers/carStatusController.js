const ApiError = require('../error/ApiError')
const { CarStatus } = require('../models/models')
class CarStatusController {

  async addCarStatus (req, res) {
    const { name } = req.body

    const carStatus = await CarStatus.create({ name })
    return res.json({ message: 'Success!', id: carStatus.id })
  }

  async getAllCarStatuses (req, res) {
    const carStatuses = await CarStatus.findAll()
    return res.json({ message: 'Success!', carStatuses })
  }
}

module.exports = new CarStatusController()
