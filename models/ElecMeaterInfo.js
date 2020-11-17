const mongoose = require('mongoose')
const { Schema, model } = mongoose

// 期号的数据库模型
let ElecMeaterInfoSchema = new Schema({
  // id: { type: Number, required: true, unique: true },
  meaternum: { type: String, require: true },
  manufacturer: { type: String, require: true },
  manufacturedate: { type: String, require: true },
  installdate: { type: String, require: true },
  meatertype: { type: String, require: true },
  voltype: { type: String, require: true },
  frequency: { type: String, require: true },
  ratedcurrent: { type: String, require: true },
  maxcurrent: { type: String, require: true },
  k: { type: String, require: true },
  olddisplayvalue: { type: String, require: true },
  displayvalue: { type: String, require: true },
  address: { type: String, require: true },
  anlh: { type: String, require: true },
  showflag: { type: Number, require: true, default: 1 },
  ctime: { type: Date, require: true, default: Date.now() },
})

module.exports = model('ElecMeaterInfo', ElecMeaterInfoSchema)
