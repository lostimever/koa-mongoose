const Dictionary = require('../models/Dictionary')

class DictionaryController {
  async add(ctx, params) {
    return await Dictionary(params).save()
  }

  async find(ctx) {
    const data = await Dictionary.find()
    return { data }
  }

  async findOne(ctx, params) {
    const data = await Dictionary.findOne(params)
    return data
  }
  async findById(ctx, id) {
    const data = await Dictionary.findById(id)
    return data
  }
  async updated(ctx, params) {
    return await new Promise((resolve, reject) => {
      resolve(Dictionary.updateOne(params))
    })
      .then(res => res)
      .catch(err => {
        return err
      })
  }
}

module.exports = new DictionaryController()
