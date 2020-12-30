const Koa = require('koa')
const static = require('koa-static')
require('./utils/db')
const log4js = require('log4js')
const cors = require('@koa/cors')
const { CORS, LOGINFO } = require('./utils/config')
const router = require('./routers/index')
const { loggerMiddleware } = require('./middleWares/logger')
const koaBody = require('koa-body')

const app = new Koa()
app.use(static('./assets'))
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024,
    },
  })
)
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
