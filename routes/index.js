const Router = require('express')
const router =  new Router()

const userRouter = require('./userRouter')
const carRouter = require('./carRouter')
const brandRouter = require('./brandRouter')
const carModelRouter = require('./carModelRouter')
const comfortRouter = require('./comfortRouter')
const carStatusRouter = require('./carStatusRouter')

// ================ User ================

router.use('/user', userRouter)

// ================ Car ================

router.use('/car', carRouter)
router.use('/brand', brandRouter)
router.use('/car-model', carModelRouter)
router.use('', comfortRouter)
router.use('', carStatusRouter)

// ================ Order ================

// ================ Feedback ================

module.exports = router
