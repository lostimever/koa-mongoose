const ElecuserController = require('../../controller/document/ElecuserController')
const EelecMeterInfoController = require('../../controller/document/ElecMeterInfoController')
const {
  SUCCESS,
  USER_NO_PERMISSION,
  USER_ACCOUNT_NOT_EXIST,
  USER_ACCOUNT_ALREADY_EXIST,
  PARAM_IS_BLANK,
} = require('../../utils/resultCode')

const { getErrMessage } = require('../../utils/utils')

class ComusereleconService {
  add = async (ctx, next) => {
    const params = {
      ...ctx.request.body,
    }

    if ((await this.findEleUser(ctx, params)) !== null) {
      await USER_ACCOUNT_ALREADY_EXIST(ctx, '电表已被绑定！')
      next()
      return
    }

    if ((await this.findElemaster(ctx, params)) === null) {
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

  find = async (ctx, next) => {
    const params = {
      ...ctx.query,
      showflag: 1,
    }
    const data = await ElecuserController.find(ctx, params)
    await SUCCESS(ctx, data)
    next()
  }

  update = async (ctx, next) => {
    const params = {
      ...ctx.request.body,
    }

    if ((await this.findElemaster(ctx, params)) === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '电表不存在！')
      next()
      return
    }

    if ((await this.findUserById(ctx, params)) === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '用户不存在！')
      next()
      return
    }

    const userData = await this.findEleUser(ctx, params)
    if (
      userData.meaternum === params.meaternum &&
      String(userData.id) !== String(params._id)
    ) {
      await USER_ACCOUNT_ALREADY_EXIST(ctx, '电表已被绑定！')
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

  delete = async (ctx, next) => {
    const params = {
      ...ctx.query,
      showflag: 0,
    }

    if (!params.hasOwnProperty('_id')) {
      await PARAM_IS_BLANK(ctx)
      next()
      return
    }

    if ((await this.findUserById(ctx, params)) === null) {
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

  findElemaster = async (ctx, params) => {
    const data = await EelecMeterInfoController.findOne(ctx, {
      meaternum: params.meaternum,
      showflag: 1,
    })
    return data
  }
  findEleUser = async (ctx, params) => {
    const data = await ElecuserController.findOne(ctx, {
      elecnum: params.elecnum,
      showflag: 1,
    })

    return data
  }

  findUserById = async (ctx, params) => {
    const data = await ElecuserController.findOne(ctx, {
      _id: params._id,
      showflag: 1,
    })
    return data
  }
}

module.exports = new ComusereleconService()
