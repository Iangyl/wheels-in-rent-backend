const ApiError = require('../error/ApiError')
const { FuelType } = require('../models/models')
class FuelTypeController {
  async addFuelType (req, res) {
    const { name } = req.body
    const fuelType = await FuelType.create({ name })
    return res.json({ message: 'Success!', id: fuelType.id })
  }

  async updateFuelType (req, res) {
    const { id } = req.params
    const { name } = req.body

    await FuelType.update(
      { name: name },
      { where: { id: id } },
    )
    return res.json('Success!')
  }

  async deleteFuelType (req, res) {
    const { id } = req.body
    await FuelType.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }

  async getAllFuelTypes (req, res) {
    const fuelTypes = await FuelType.findAll()
    return res.json({ message: 'Success!', fuelTypes })
  }
}

module.exports = new FuelTypeController()
