// const ElecMeterInfo = require('../models/ElecMeaterInfo')
const dictionaryController = require('../controllers/dictionaryController')
const {
  SUCCESS,
  USER_NO_PERMISSION,
  USER_ACCOUNT_NOT_EXIST,
  USER_ACCOUNT_ALREADY_EXIST,
  PARAM_IS_BLANK,
} = require('../utils/resultCode')

const { getErrMessage } = require('../utils/utils')

class DictionaryService {
  async add(ctx, next) {
    const params = {
      ...ctx.request.body,
    }
    await new Promise(resolve => {
      resolve(dictionaryController.add(ctx, params))
    })
      .then(res => {
        SUCCESS(ctx, res)
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })
    next()
  }

  async find(ctx, next) {
    const { data } = await dictionaryController.find(ctx)
    const resData = {}
    data.forEach(ele => {
      if (!resData.hasOwnProperty(ele.type)) {
        resData[ele.type] = []
      }
      resData[ele.type].push(ele)
    })

    await SUCCESS(ctx, { data: resData })
    next()
  }
}

module.exports = new DictionaryService()