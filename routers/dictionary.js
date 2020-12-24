const Router = require('@koa/router')
const router = new Router()
const DictionaryService = require('../service/dictionaryService')

router.get(`/query`, DictionaryService.find)
// .post(`/add`, DictionaryService.add)

module.exports = router.routes()
