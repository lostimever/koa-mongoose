const ElecMeterInfo = require('../models/ElecMeaterInfo')
// const { SUCCESS } = require('../utils/resultCode')

class ElecMeterInfoController {
  async add(ctx, params) {
    // return await new Promise((resolve, reject) => {
    //   resolve(ElecMeterInfo(params).save())
    // })
    //   .then(res => res)
    //   .catch(err => err)

    return await ElecMeterInfo(params).save()
  }

  async find(ctx, params) {
    const param = Object.assign(params, {})
    delete param.pageIndex
    delete param.pageSize
    console.log('ElecMeterInfoController -> find -> params', params.pageSize)
    const data = await ElecMeterInfo.find(param)
      // .skip((Number(params.pageIndex) - 1) * Number(params.pageSize))
      .limit(Number(params.pageSize))
      .sort({ _id: -1 })
    return data
  }

  async findOne(ctx, params) {
    const data = await ElecMeterInfo.findOne(params)
    return data
  }
  async findById(ctx, id) {
    const data = await ElecMeterInfo.findById(id)
    return data
  }
  async updated(ctx, params) {
    return await new Promise((resolve, reject) => {
      resolve(ElecMeterInfo.updateOne(params))
    })
      .then(res => res)
      .catch(err => {
        console.log('ElecMeterInfoController -> updated -> err', err)
        return err
      })
  }
}

module.exports = new ElecMeterInfoController()
