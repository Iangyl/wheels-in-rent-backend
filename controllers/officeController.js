const ApiError = require('../error/ApiError')
const { Office } = require('../models/models')
class OfficeController {
  async addOffice (req, res) {
    const { name } = req.body
    const office = await Office.create({ name })
    return res.json({ message: 'Success!', id: office.id })
  }

  async updateOffice (req, res) {
    const { id } = req.params
    const { name } = req.body

    await Office.update(
      { name: name },
      { where: { id: id } },
    )
    return res.json('Success!')
  }

  async deleteOffice (req, res) {
    const { id } = req.body
    await Office.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }

  async getAllOffices (req, res) {
    const offices = await Office.findAll()
    return res.json({ message: 'Success!', offices })
  }
}

module.exports = new OfficeController()
