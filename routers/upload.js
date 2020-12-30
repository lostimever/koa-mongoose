const Router = require('@koa/router')
const router = new Router()
const UploadService = require('../service/UploadService')

router.post(`/upload`, UploadService.upload)

module.exports = router.routes()
