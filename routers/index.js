const Router = require('@koa/router')
const router = new Router({
  prefix: '/api', // 统一前缀，接口全部为 /api/xxx 格式
})

const elecMeterInfo = require('./elecMeterInfo')
router.use('/elecMeterInfo', elecMeterInfo)

module.exports = router
