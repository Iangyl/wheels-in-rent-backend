const Router = require('express')
const router =  new Router()
const BodyTypeController = require('../controllers/bodyTypeController')

router.post('/add-body_type', BodyTypeController.addBodyType)

router.delete('/remove-body_type', BodyTypeController.deleteBodyType)

router.put('/update-body_type/:id', BodyTypeController.updateBodyType)

router.get('/body_types', BodyTypeController.getAllBodyTypes)

module.exports = router
