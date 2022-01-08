const Router = require('express')
const router =  new Router()
const CarController = require('./../controllers/carController')

router.get('/', CarController.getCars)

router.get('/car/:id', CarController.getCar)

router.post('/add-car', CarController.newCar)

router.delete('/remove-car', CarController.deleteCar)

router.put('/update-car', CarController.updateCar)

module.exports = router
