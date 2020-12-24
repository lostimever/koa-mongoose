const ComusereleconController = require('../../controllers/document/ComusereleconController')
const {
  SUCCESS,
  USER_NO_PERMISSION,
  USER_ACCOUNT_NOT_EXIST,
  USER_ACCOUNT_ALREADY_EXIST,
  PARAM_IS_BLANK,
} = require('../../utils/resultCode')

const { getErrMessage } = require('../../utils/utils')

class ComusereleconService {
  async add(ctx, next) {
    const params = {
      ...ctx.request.body,
    }
    const selecData = await ComusereleconController.findOne(ctx, {
      elecnum: params.elecnum,
    })
    if (selecData !== null) {
      await USER_ACCOUNT_ALREADY_EXIST(ctx, '用户已存在！')
      next()
      return
    }
    await ComusereleconController.add(ctx, params)
      .then(res => {
        SUCCESS(ctx, res)
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })
    next()
  }

  async find(ctx, next) {
    const params = {
      ...ctx.query,
      showflag: 1,
    }
    const data = await ComusereleconController.find(ctx, params)
    await SUCCESS(ctx, data)
    next()
  }

  async update(ctx, next) {
    const params = {
      ...ctx.request.body,
    }
    const selecData = await ComusereleconController.findById(ctx, params._id)
    if (selecData === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '用户不存在！')
      next()
      return
    }

    await ComusereleconController.updated(ctx, params)
      .then(res => {
        SUCCESS(ctx, res)
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })

    next()
  }

  async delete(ctx, next) {
    const params = {
      ...ctx.query,
      showflag: 0,
    }
    console.log(
      '🚀 ~ file: ComusereleconService.js ~ line 73 ~ ComusereleconService ~ delete ~ params',
      params
    )

    if (!params.hasOwnProperty('_id')) {
      await PARAM_IS_BLANK(ctx)
      next()
      return
    }
    const selecData = await ComusereleconController.findById(ctx, params._id)
    if (selecData === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '用户不存在！')
      next()
      return
    }

    await ComusereleconController.updated(ctx, params)
      .then(res => {
        SUCCESS(ctx, { msg: '删除成功' })
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })

    next()
  }
}

module.exports = new ComusereleconService()
