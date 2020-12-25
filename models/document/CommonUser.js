const mongoose = require('mongoose')
const { Schema, model } = mongoose

// 期号的数据库模型
let CommonUserSchema = new Schema({
  elecnum: { type: String, required: [true, '电力户号不能为空'] },
  meaternum: { type: String, required: [true, '电表编号不能为空'] },
  username: { type: String, required: [true, '用户名称不能为空'] },
  phone: { type: Number, required: [true, '联系方式不能为空'] },
  address: { type: String }, //用电地址
  paytype: { type: Number, default: 1 }, //缴费方式，1为预缴费
  balance: { type: String, default: 0 }, //账户余额
  redpacket: { type: String, default: 0 }, //红包余额
  bill: { type: String, default: 0 }, //待缴金额=电费+滞纳金+原待缴金额
  integral: { type: String, default: 0 }, //积分
  calcplay: { type: Number, default: 1 }, //电费计算方式
  showflag: { type: Number, required: true, default: 1 },
  querypwd: { type: String, default: 1234 }, //查询密码
  ctime: { type: Date, default: Date.now() },
  version: { type: Number, default: 1 }, //乐观锁修改金额
  balancelevel: { type: Number, default: 0 }, //提示时间
  hintflag: { type: Number, default: 0 }, //提示标志
})

module.exports = model('CommonUser', CommonUserSchema)
