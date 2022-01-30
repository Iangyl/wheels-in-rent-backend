const Router = require('express')
const router =  new Router()
const CarController = require('./../controllers/carController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.get('/cars', CarController.getCars)

router.get('/car/:id', CarController.getCar)

router.post('/add-car', checkRole('ADMIN'), CarController.newCar)

router.delete('/remove-car', checkRole('ADMIN'), CarController.deleteCar)

router.patch('/update-car/:id', checkRole('ADMIN'), CarController.updateCar)

module.exports = router
