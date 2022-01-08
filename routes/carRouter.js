const Router = require('express')
const router =  new Router()
const CarController = require('./../controllers/carController')

router.get('/', CarController.getCars)

router.get('/car/:id', CarController.getCar)

router.post('/admin/add-car', CarController.newCar)

router.delete('/admin/remove-car', CarController.deleteCar)

router.put('/admin/update-car', CarController.updateCar)

module.exports = router
