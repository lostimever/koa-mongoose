const Router = require('@koa/router')
const router = new Router()
const CommonUserService = require('../../service/document/CommonUserService')

router
  .post(`/add`, CommonUserService.add)
  .get(`/query`, CommonUserService.find)
  .get('/remove', CommonUserService.delete)
  .post(`/update`, CommonUserService.update)

module.exports = router.routes()
