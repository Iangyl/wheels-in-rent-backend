const ApiError = require('../error/ApiError')
const { Transmission } = require('../models/models')
class TransmissionController {
  async addTransmission (req, res) {
    const { name } = req.body
    const transmission = await Transmission.create({ name })
    return res.json({ message: 'Success!', id: transmission.id })
  }

  async updateTransmission (req, res) {
    const { id } = req.params
    const { name } = req.body

    await Transmission.update(
      { name: name },
      { where: { id: id } },
    )
    return res.json('Success!')
  }

  async deleteTransmission (req, res) {
    const { id } = req.body
    await Transmission.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }

  async getAllTransmissions (req, res) {
    const transmissions = await Transmission.findAll()
    return res.json({ message: 'Success!', transmissions })
  }
}

module.exports = new TransmissionController()
