const Router = require('express')
const router =  new Router()
const CarStatusController = require('./../controllers/carStatusController')

router.post('/add-car_status', CarStatusController.addCarStatus)

router.get('/car_statuses', CarStatusController.getAllCarStatuses)

module.exports = router
