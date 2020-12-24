const Elecuser = require('../../models/document/Elecuser')

class ElecuserController {
  async add(ctx, params) {
    await new Promise((resolve, reject) => {
      Elecuser(params).save((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
      .then(res => res)
      .catch(err => err)
  }

  async find(ctx, params) {
    const param = Object.assign({}, params)
    delete param.pageIndex
    delete param.pageSize

    const _filter = {}
    //参数列表
    const paramsArr = ['elecnum', 'companyname']
    for (const key in param) {
      if (param[key] !== '') {
        if (paramsArr.includes(key)) {
          if (!_filter.hasOwnProperty('$and')) {
            _filter.$and = [
              {
                [key]: { $regex: param[key] },
              },
            ]
          } else {
            _filter.$and.push({
              [key]: { $regex: param[key] },
            })
          }
        } else {
          _filter[key] = param[key]
        }
      }
    }
    console.log(
      '🚀 ~ file: ElecuserController.js ~ line 42 ~ ElecuserController ~ find ~ _filter',
      _filter
    )

    const totalCount = await Elecuser.find(_filter).countDocuments()
    const data = await Elecuser.find(_filter)
      .skip((Number(params.pageIndex) - 1) * Number(params.pageSize))
      .limit(Number(params.pageSize))
      .sort({ _id: -1 })

    return { data, totalCount }
  }

  async findOne(ctx, params) {
    const data = await Elecuser.findOne(params)
    return data
  }
  async findById(ctx, id) {
    const data = await Elecuser.findById(id)
    return data
  }
  async updated(ctx, params) {
    const paramsDoc = Object.assign({}, params)
    delete paramsDoc._id

    await new Promise((resolve, reject) => {
      Elecuser.updateOne({ _id: params._id }, paramsDoc, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
      .then(res => res)
      .catch(err => err)
  }
}

module.exports = new ElecuserController()
