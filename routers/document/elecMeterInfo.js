const Router = require('@koa/router')
const router = new Router()
const ElecMeterInfoService = require('../../service/document/ElecMeterInfoService')

router
  .post(`/add`, ElecMeterInfoService.add)
  .get(`/query`, ElecMeterInfoService.find)
  .get('/remove', ElecMeterInfoService.delete)
  .post(`/update`, ElecMeterInfoService.update)

module.exports = router.routes()
