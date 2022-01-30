const Router = require('express')
const router =  new Router()
const BodyTypeController = require('../controllers/bodyTypeController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-body_type', checkRole('ADMIN'), BodyTypeController.addBodyType)

router.delete('/remove-body_type', checkRole('ADMIN'), BodyTypeController.deleteBodyType)

router.put('/update-body_type/:id', checkRole('ADMIN'), BodyTypeController.updateBodyType)

router.get('/body_types', BodyTypeController.getAllBodyTypes)

module.exports = router
