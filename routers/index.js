const Router = require('@koa/router')
const router = new Router({
  prefix: '/api', // 统一前缀，接口全部为 /api/xxx 格式
})

const elecMeterInfo = require('./document/elecMeterInfo')
router.use('/elecMeterInfo', elecMeterInfo)
const elecuser = require('./document/elecuser')
router.use('/elecuser', elecuser)
const commonuser = require('./document/commonuser')
router.use('/commonuser', commonuser)
const comuserelecon = require('./comuserelecon')
router.use('/comuserelecon', comuserelecon)
const dictionary = require('./dictionary')
router.use('/dictionary', dictionary)

module.exports = router
