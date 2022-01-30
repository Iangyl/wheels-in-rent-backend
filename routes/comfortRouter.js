const Router = require('express')
const router =  new Router()
const ComfortTypeController = require('./../controllers/comfortController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-comfort', checkRole('ADMIN'), ComfortTypeController.addComfortType)

router.get('/comfort_types', ComfortTypeController.getAllComfortTypes)

module.exports = router
