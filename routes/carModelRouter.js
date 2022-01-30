const Router = require('express')
const router =  new Router()
const ModelController = require('./../controllers/modelController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.get('/models', ModelController.getAllModels)

router.get('/model/:id', ModelController.getModelById)

router.post('/add-model', checkRole('ADMIN'), ModelController.addModel)

router.delete('/remove-model', checkRole('ADMIN'), ModelController.deleteModel)

router.patch('/update-model/:id', checkRole('ADMIN'), ModelController.updateModel)

module.exports = router
