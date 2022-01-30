const Router = require('express')
const router =  new Router()
const FuelTypeController = require('../controllers/fuelTypeController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-fuel_type', checkRole('ADMIN'), FuelTypeController.addFuelType)

router.delete('/remove-fuel_type', checkRole('ADMIN'), FuelTypeController.deleteFuelType)

router.put('/update-fuel_type/:id', checkRole('ADMIN'), FuelTypeController.updateFuelType)

router.get('/fuel_types', FuelTypeController.getAllFuelTypes)

module.exports = router
