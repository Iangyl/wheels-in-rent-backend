const ApiError = require('../error/ApiError')
const { Brand } = require('./../models/models')
class BrandController {
  async addBrand (req, res) {
    const { name } = req.body
    const brand = await Brand.create({ name })
    return res.json({ message: 'Success!', id: brand.id })
  }

  async updateBrand (req, res) {
    const { id } = req.query
    const { name } = req.body
    await Brand.update(
      { name: name },
      { where: { id: id } },
      )
    return res.json('Success!')
  }

  async deleteBrand (req, res) {
    const { id } = req.body
    await Brand.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }

  async getAllBrands (req, res) {
    const brands = await Brand.findAll()
    return res.json({ message: 'Success!', brands })
  }
}

module.exports = new BrandController()
