const { CarModel } = require('./../models/models')
const ApiError = require('../error/ApiError')

class ModelController {
  async addModel (req, res) {
    try {
      const {
        name,
        engine_power,
        fuel_consumption,
        fuel_type,
        transmission,
        max_speed,
        trunk_volume,
        body_type,
        edition_year,
        desc_text,
        brand_id,
      } = req.body

      const carModel = await CarModel.create(
        name,
        engine_power,
        fuel_consumption,
        fuel_type,
        transmission,
        max_speed,
        trunk_volume,
        body_type,
        edition_year,
        desc_text,
        brand_id
      )

      res.json({ message: 'Success!', id: carModel.id })
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async updateModel (req, res) {
    const { id } = req.query

    await CarModel.update(
      { ...req.body },
      { where: { id: id } }
    )

    return res.json('Success!')
  }

  async deleteModel (req, res) {
    const { id } = req.body
    await CarModel.destroy({
      where: {
        id: id
      }
    })
    return res.json({ message: 'Success!' })
  }

  async getAllModels (req, res) {
    const carModels = await CarModel.findAll()
    return res.json({ message: 'Success!', carModels })
  }

  async getModelById (req, res) {
    const { id } = req.query

    const carModel = await CarModel.findByPK(id)
    return res.json({ message: 'Success!', carModel })
  }
}

module.exports = new ModelController()
