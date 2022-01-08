const ApiError = require('./../error/ApiError')

class UserController {
  async signUp (req, res) {

  }

  async signIn (req, res) {

  }

  async check (req, res, next) {
    const { id } = req.query
    if (!id) {
      return next(ApiError.badRequest('Id not specified!'))
    }
    res.json('OK!')
  }
}

module.exports = new UserController()
