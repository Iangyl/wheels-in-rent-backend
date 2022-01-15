const Router = require('express')
const router =  new Router()
const CarController = require('./../controllers/carController')

router.get('/cars', CarController.getCars)

router.get('/car/:id', CarController.getCar)

router.post('/add-car', CarController.newCar)

router.delete('/remove-car', CarController.deleteCar)

router.patch('/update-car/:id', CarController.updateCar)

module.exports = router
