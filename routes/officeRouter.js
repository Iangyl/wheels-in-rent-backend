const Router = require('express')
const router =  new Router()
const OfficeController = require('../controllers/officeController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-office', checkRole('ADMIN'), OfficeController.addTransmission)

router.delete('/remove-office', checkRole('ADMIN'), OfficeController.deleteTransmission)

router.put('/update-office/:id', checkRole('ADMIN'), OfficeController.updateTransmission)

router.get('/offices', OfficeController.getAllTransmissions)

module.exports = router
