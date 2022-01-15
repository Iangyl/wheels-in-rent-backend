const Router = require('express')
const router =  new Router()
const ComfortTypeController = require('./../controllers/comfortController')

router.post('/add-comfort', ComfortTypeController.addComfortType)

router.get('/comfort_types', ComfortTypeController.getAllComfortTypes)

module.exports = router
