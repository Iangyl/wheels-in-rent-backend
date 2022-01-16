const ApiError = require('../error/ApiError')
const { BodyType } = require('../models/models')
class BodyTypeController {
  async addBodyType (req, res) {
    const { name } = req.body
    const bodyType = await BodyType.create({ name })
    return res.json({ message: 'Success!', id: bodyType.id })
  }

  async updateBodyType (req, res) {
    const { id } = req.params
    const { name } = req.body

    await BodyType.update(
      { name: name },
      { where: { id: id } },
    )
    return res.json('Success!')
  }

  async deleteBodyType (req, res) {
    const { id } = req.body
    await BodyType.destroy({
      where: {
        id: id
      }
    })
    return res.json('Success!')
  }

  async getAllBodyTypes (req, res) {
    const bodyTypes = await BodyType.findAll()
    return res.json({ message: 'Success!', bodyTypes })
  }
}

module.exports = new BodyTypeController()
