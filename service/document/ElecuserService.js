const ElecuserController = require('../../controllers/document/ElecuserController')
const EelecMeterInfoController = require('../../controllers/document/elecMeterInfoController')
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

    if (this.findEleUser(ctx, params) !== null) {
      await USER_ACCOUNT_ALREADY_EXIST(ctx, '电表已被绑定！')
      next()
      return
    }

    if (this.findElemaster(ctx, params) === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '电表不存在！')
      next()
      return
    }

    await ElecuserController.add(ctx, params)
      .then(res => {
        SUCCESS(ctx, res)
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })
    next()
  }

  async findElemaster(ctx, params) {
    return await EelecMeterInfoController.findOne(ctx, {
      meaternum: params.meaternum,
    })
  }
  async findEleUser(ctx, params) {
    return await ElecuserController.findOne(ctx, {
      elecnum: params.elecnum,
    })
  }

  async find(ctx, next) {
    const params = {
      ...ctx.query,
      showflag: 1,
    }
    const data = await ElecuserController.find(ctx, params)
    await SUCCESS(ctx, data)
    next()
  }

  async update(ctx, next) {
    const params = {
      ...ctx.request.body,
    }
    const selecData = await ElecuserController.findById(ctx, params._id)
    if (selecData === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '用户不存在！')
      next()
      return
    }

    await ElecuserController.updated(ctx, params)
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
    const selecData = await ElecuserController.findById(ctx, params._id)
    if (selecData === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '用户不存在！')
      next()
      return
    }

    await ElecuserController.updated(ctx, params)
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
