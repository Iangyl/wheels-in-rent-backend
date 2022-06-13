const Router = require('express')
const router =  new Router()
const OfficeController = require('../controllers/officeController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-office', checkRole('ADMIN'), OfficeController.addOffice)

router.delete('/remove-office', checkRole('ADMIN'), OfficeController.deleteOffice)

router.put('/update-office/:id', checkRole('ADMIN'), OfficeController.updateOffice)

router.get('/offices', OfficeController.getAllOffices)

module.exports = router
