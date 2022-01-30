const ApiError = require('./../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Personal } = require('./../models/models')
const { use } = require('bcrypt/promises')

const generateJWT = (id, email, role) => {
  return jwt.sign({
      id,
      email,
      role
    },
    process.env.PRIVATE_KEY,
    {
      expiresIn: '8h'
    }
  )
}

class UserController {
  async signUp(req, res, next) {
    const { name, email, password, tel, birth, role } = req.body

    if (!email || !password || !tel) {
      next(ApiError.badRequest('Invalid password or email'))
    }

    const candidate = await User.findOne({
      where: {
        email,
        personalTel: tel
      }
    })

    if (candidate) {
      return next(ApiError.badRequest('The user is already exist!'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const personal = await Personal.create({ tel, birth })
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role,
      personalTel: personal.tel
    })

    const token = generateJWT(user.id, user.email, user.role)
  
    return res.json({ message: 'Success!', token })
  }

  async signIn(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email
      }
    })

    if (!user) {
      return next(ApiError.internal("User is not exist!"))
    }

    const comparePassword = bcrypt.compareSync(password, user.password)

    if (!comparePassword) {
      return next(ApiError.badRequest("Wrong password!"))
    }

    const token = generateJWT(user.id, user.email, user.role)

    return res.json({ message: 'Success!', token })
  }

  async check(req, res, next) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({ message: 'OK!', token })
  }
}

module.exports = new UserController()
