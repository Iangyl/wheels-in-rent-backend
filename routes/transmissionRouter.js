const Router = require('express')
const router =  new Router()
const TransmissionController = require('../controllers/transmissionController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-transmission', checkRole('ADMIN'), TransmissionController.addTransmission)

router.delete('/remove-transmission', checkRole('ADMIN'), TransmissionController.deleteTransmission)

router.put('/update-transmission/:id', checkRole('ADMIN'), TransmissionController.updateTransmission)

router.get('/transmissions', TransmissionController.getAllTransmissions)

module.exports = router
