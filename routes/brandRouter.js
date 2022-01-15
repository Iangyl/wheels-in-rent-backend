const Router = require('express')
const router =  new Router()
const BrandController = require('./../controllers/brandController')

router.post('/add-brand', BrandController.addBrand)

router.delete('/remove-brand', BrandController.deleteBrand)

router.put('/update-brand/:id', BrandController.updateBrand)

router.get('/brands', BrandController.getAllBrands)

module.exports = router
