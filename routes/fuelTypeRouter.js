const Router = require('express')
const router =  new Router()
const FuelTypeController = require('../controllers/fuelTypeController')

router.post('/add-fuel_type', FuelTypeController.addFuelType)

router.delete('/remove-fuel_type', FuelTypeController.deleteFuelType)

router.put('/update-fuel_type/:id', FuelTypeController.updateFuelType)

router.get('/fuel_types', FuelTypeController.getAllFuelTypes)

module.exports = router
