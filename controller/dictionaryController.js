const Dictionary = require('../models/Dictionary')

class DictionaryController {
  async find(ctx) {
    return await Dictionary.find()
  }
}

module.exports = new DictionaryController()
