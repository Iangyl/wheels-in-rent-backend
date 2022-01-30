const Router = require('express')
const router =  new Router()
const UserController = require('./../controllers/userController')
const authMiddleware = require('./../middleware/authMiddleware')

router.post('/sign-up', UserController.signUp)
router.get('/sign-in', UserController.signIn)
router.get('/auth', authMiddleware, UserController.check)

module.exports = router
