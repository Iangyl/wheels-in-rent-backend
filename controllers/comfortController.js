const ApiError = require('../error/ApiError')
const { ComfortType } = require('./../models/models')
class ComfortTypeController {
  async addComfortType (req, res) {
    const { name } = req.body
    const comfortType = await ComfortType.create({ name })
    return res.json({ message: 'Success!', id: comfortType.id })
  }

  async getAllComfortTypes (req, res) {
    const comfortTypes = await ComfortType.findAll()
    return res.json(comfortTypes)
  }
}

module.exports = new ComfortTypeController()
