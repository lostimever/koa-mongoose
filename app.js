const Koa = require('koa')
const serve = require('koa-static')
require('./utils/db')
const bodyparser = require('koa-bodyparser')
const log4js = require('log4js')
const cors = require('@koa/cors')
const { CORS, LOGINFO } = require('./utils/config')
const router = require('./routers/index')
const { loggerMiddleware } = require('./middleWares/logger')

const app = new Koa()
app.use(serve('./assets'))
app.use(bodyparser())
app.use(cors(CORS))
app.use(router.routes()).use(router.allowedMethods())
app.use(loggerMiddleware)

// log4js.configure(LOGINFO)

// app.listen(3000, () => {
//   const host = server.address().address
//   const port = server.address().port
//   console.log('app start listening at http://%s:%s', host, port)
// })

module.exports = app
