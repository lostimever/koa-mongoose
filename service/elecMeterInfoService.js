// const ElecMeterInfo = require('../models/ElecMeaterInfo')
const elecMeterInfoController = require('../controllers/elecMeterInfoController')
const {
  SUCCESS,
  USER_NO_PERMISSION,
  USER_ACCOUNT_NOT_EXIST,
  USER_ACCOUNT_ALREADY_EXIST,
  PARAM_IS_BLANK,
} = require('../utils/resultCode')

const { getErrMessage } = require('../utils/utils')

class ElecMeterInfoService {
  async add(ctx, next) {
    const params = {
      ...ctx.request.body,
    }
    const selecData = await elecMeterInfoController.findOne(ctx, {
      meaternum: params.meaternum,
    })
    if (selecData !== null) {
      await USER_ACCOUNT_ALREADY_EXIST(ctx, '电表已存在！')
      next()
      return
    }
    await new Promise(resolve => {
      resolve(elecMeterInfoController.add(ctx, params))
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
    const params = {
      ...ctx.query,
      showflag: 1,
    }
    const data = await elecMeterInfoController.find(ctx, params)
    await SUCCESS(ctx, data)
    next()
  }

  async update(ctx, next) {
    const params = {
      ...ctx.request.body,
    }
    const selecData = await elecMeterInfoController.findById(ctx, params._id)
    if (selecData === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '电表不存在！')
      next()
      return
    }

    await new Promise(resolve => {
      resolve(elecMeterInfoController.updated(ctx, params))
    })
      .then(res => {
        SUCCESS(ctx, {})
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })

    next()
  }

  async delete(ctx, next) {
    const params = {
      ...ctx.request.body,
      showflag: 0,
    }

    if (!params.hasOwnProperty('_id')) {
      await PARAM_IS_BLANK(ctx)
      next()
      return
    }
    const selecData = await elecMeterInfoController.findById(ctx, params._id)
    if (selecData === null) {
      await USER_ACCOUNT_NOT_EXIST(ctx, '电表不存在！')
      next()
      return
    }
    await new Promise(resolve => {
      resolve(elecMeterInfoController.updated(ctx, params))
    })
      .then(res => {
        SUCCESS(ctx, { msg: '删除成功' })
      })
      .catch(err => {
        PARAM_IS_BLANK(ctx, getErrMessage(err))
      })

    next()
  }
}

module.exports = new ElecMeterInfoService()
