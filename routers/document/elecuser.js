const Router = require('@koa/router')
const router = new Router()
const ElecuserService = require('../../service/document/ElecuserService')

router
  .post(`/add`, ElecuserService.add)
  .get(`/query`, ElecuserService.find)
  .get('/remove', ElecuserService.delete)
  .post(`/update`, ElecuserService.update)

module.exports = router.routes()
