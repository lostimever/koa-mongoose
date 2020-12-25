const mongoose = require('mongoose')
const { Schema, model } = mongoose

// 期号的数据库模型
let ComusereleconSchema = new Schema({
  enum: { type: String, required: [true, '电力户号不能为空'] },
  meaternum: { type: String, required: [true, '电表编号不能为空'] },
  ename: { type: String, required: [true, '用户名称不能为空'] },
  address: { type: String, required: [true, '用电地址不能为空'] },
  stime: { type: String },
  totalelec: { type: String },
  ctime: { type: Date, default: Date.now() },
  price: { type: String },
  amount: { type: String },
  jianelec: { type: String },
  fengelec: { type: String },
  pingelec: { type: String },
  guelec: { type: String },
  moonstart: { type: String },
  moonend: { type: String },
  paystate: { type: Number, required: true },
  invoicestate: { type: Number, required: true },
  calctype: { type: Number, required: true },
  overdue: { type: String },
  showflag: { type: Number, required: true, default: 1 },
})

module.exports = model('Comuserelecon', ComusereleconSchema, 'comuserelecon')
