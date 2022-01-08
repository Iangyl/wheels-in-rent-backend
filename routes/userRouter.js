const Router = require('express')
const router =  new Router()
const UserController = require('./../controllers/userController')

router.post('/sign-up', UserController.signUp)
router.get('/sign-in', UserController.signIn)
router.get('/auth', UserController.check)

module.exports = router
