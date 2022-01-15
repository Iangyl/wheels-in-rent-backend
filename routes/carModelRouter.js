const Router = require('express')
const router =  new Router()
const ModelController = require('./../controllers/modelController')

router.get('/models', ModelController.getAllModels)

router.get('/model/:id', ModelController.getModelById)

router.post('/add-model', ModelController.addModel)

router.delete('/remove-model', ModelController.deleteModel)

router.patch('/update-model/:id', ModelController.updateModel)

module.exports = router
