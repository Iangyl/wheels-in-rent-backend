const Router = require('express')
const router =  new Router()
const BrandController = require('./../controllers/brandController')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/add-brand', checkRole('ADMIN'), BrandController.addBrand)

router.delete('/remove-brand', checkRole('ADMIN'), BrandController.deleteBrand)

router.put('/update-brand/:id', checkRole('ADMIN'), BrandController.updateBrand)

router.get('/brands', BrandController.getAllBrands)

module.exports = router
