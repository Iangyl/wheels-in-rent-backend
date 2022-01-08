const Router = require('express')
const router =  new Router()

const userRouter = require('./userRouter')
const carRouter = require('./carRouter')
const brandRouter = require('./brandRouter')

router.use('/car', carRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)

module.exports = router
