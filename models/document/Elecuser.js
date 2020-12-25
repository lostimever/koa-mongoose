const mongoose = require('mongoose')
const { Schema, model } = mongoose

// 期号的数据库模型
let ElecuserSchema = new Schema({
  elecnum: { type: String, required: [true, '电力户号不能为空'] },
  meaternum: { type: String, required: [true, '电表编号不能为空'] },
  companyname: { type: String, required: [true, '企业名称不能为空'] },
  companytype: { type: Number, required: [true, '企业类型不能为空'] },
  voltype: { type: Number }, //电压等级
  transforcap: { type: Number }, //变压器容量
  indcomregauthor: { type: String }, //工商注册机关
  legalp: { type: String }, //法定代表人
  contactp: { type: String, required: [true, '联系人不能为空'] },
  userabbreviation: { type: String }, //统一社会信用代码
  contactemail: { type: String }, //联系人邮箱
  contacttel: { type: String }, //办公电话
  phone: { type: Number, required: [true, '手机不能为空'] }, //手机
  ecat: { type: Number, default: 1 }, //用电类别
  usercomregaddr: { type: String }, //企业注册地址
  paytype: { type: Number, default: 1 }, //缴费方式，1为预缴费
  elecaddr: { type: String, required: [true, '用电地址不能为空'] }, //用电地址
  contractaddr: { type: String }, //通讯地址
  balance: { type: String, default: 0 }, //账户余额
  redpacket: { type: String, default: 0 }, //红包余额
  bill: { type: String, default: 0 }, //待缴金额=电费+滞纳金+原待缴金额
  eleccharge: { type: String, default: 0 }, //电费
  integral: { type: String, default: 0 }, //积分
  calcplay: { type: Number, default: 1 }, //电费计算方式
  showflag: { type: Number, required: true, default: 1 },
  querypwd: { type: String, default: 1234 }, //查询密码
  ctime: { type: Date, default: Date.now() },
  version: { type: Number, default: 1 }, //乐观锁修改金额
  balancelevel: { type: Number, default: 0 }, //
  hintflag: { type: Number, default: 0 }, //
})

module.exports = model('Elecuser', ElecuserSchema)
