const mongoose = require('mongoose')
const { Schema, model } = mongoose

// 期号的数据库模型
let DictionarySchema = new Schema({
  id: { type: Number, required: true },
  type: { type: Number, required: [true, '字典类型不能为空'] },
  name: { type: String, required: [true, '字典名称不能为空'] },
})

module.exports = model('Dictionary', DictionarySchema)
