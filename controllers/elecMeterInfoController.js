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
    const param = Object.assign({}, params)
    delete param.pageIndex
    delete param.pageSize

    const _filter = {
      $or: [],
    }
    for (const key in param) {
      if (key === 'meaternum' || key === 'manufacturer') {
        _filter.$or.push({
          [key]: { $regex: param[key] },
        })
      } else if (param[key] !== '') {
        _filter[key] = param[key]
      }
    }

    const totalCount = await ElecMeterInfo.find(_filter).countDocuments()
    const data = await ElecMeterInfo.find(_filter)
      .skip((Number(params.pageIndex) - 1) * Number(params.pageSize))
      .limit(Number(params.pageSize))
      .sort({ _id: -1 })
    return { data, totalCount }
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
