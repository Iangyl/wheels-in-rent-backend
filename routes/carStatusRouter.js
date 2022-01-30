const Router = require('express')
const router =  new Router()
const CarStatusController = require('./../controllers/carStatusController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-car_status', checkRole('ADMIN'), CarStatusController.addCarStatus)

router.get('/car_statuses', CarStatusController.getAllCarStatuses)

module.exports = router
