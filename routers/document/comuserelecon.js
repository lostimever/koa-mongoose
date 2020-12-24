const Router = require('@koa/router')
const router = new Router()
const ComusereleconService = require('../../service/document/ComusereleconService')
// router.get('/', (ctx, next) => {
//   ctx.body = 'index'
//   // next()函数，当执行next将会从这里主动把执行权交给下一个中间件，也就是下一个路由
//   next()
// })

router
  .post(`/add`, ComusereleconService.add)
  .get(`/query`, ComusereleconService.find)
  .get('/remove', ComusereleconService.delete)
  .post(`/update`, ComusereleconService.update)

module.exports = router.routes()
