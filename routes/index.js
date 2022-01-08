const Router = require('express')
const router =  new Router()

const userRouter = require('./userRouter')
const carRouter = require('./carRouter')

router.use('/car', carRouter)
router.use('/user', userRouter)

module.exports = router
