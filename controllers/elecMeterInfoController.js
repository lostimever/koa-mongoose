const ElecMeterInfo = require('../models/ElecMeaterInfo')

class ElecMeterInfoController {
  async add(ctx, next) {
    // ctx.verifyParams({
    //   date: { type: 'string', required: true },
    //   list: { type: 'string', require: true },
    // })

    await new Promise((resolve, reject) => {
      resolve(new ElecMeterInfo(ctx.request.body).save())
    })
      .then(res => {
        ctx.response.body = res
        next()
      })
      .catch(err => {
        ctx.throw(500, err)
      })
  }

  async find(ctx, next) {
    const data = await ElecMeterInfo.find()
    ctx.response.body = data.join('\n')
    next()
  }
}

module.exports = new ElecMeterInfoController()
