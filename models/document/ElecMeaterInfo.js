const mongoose = require('mongoose')
const { Schema, model } = mongoose

// 期号的数据库模型
let ElecMeaterInfoSchema = new Schema({
  // id: { type: Number, required: true, unique: true },
  meaternum: { type: String, required: [true, '电表编号不能为空'] },
  manufacturer: { type: String, required: [true, '制造商不能为空'] },
  manufacturedate: { type: String, required: [true, '生产日期不能为空'] },
  installdate: { type: String, required: [true, '安装日期不能为空'] },
  meatertype: { type: Number, required: [true, '电表类型不能为空'] },
  voltype: { type: Number, required: [true, '电压等级不能为空'] },
  frequency: { type: String, required: false },
  ratedcurrent: { type: String, required: false },
  maxcurrent: { type: String, required: false },
  k: { type: Number, required: false },
  olddisplayvalue: { type: String, required: false },
  displayvalue: { type: String, required: false },
  address: { type: String, required: [true, '用电地址不能为空'] },
  anlh: { type: String, requiredd: false },
  showflag: { type: Number, required: true, default: 1 },
  ctime: { type: Date, default: Date.now() },
})

module.exports = model('ElecMeaterInfo', ElecMeaterInfoSchema)
