const Router = require('express')
const router =  new Router()
const TransmissionController = require('../controllers/transmissionController')

router.post('/add-transmission', TransmissionController.addTransmission)

router.delete('/remove-transmission', TransmissionController.deleteTransmission)

router.put('/update-transmission/:id', TransmissionController.updateTransmission)

router.get('/transmissions', TransmissionController.getAllTransmissions)

module.exports = router
