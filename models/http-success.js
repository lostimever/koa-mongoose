class SuccessModel {
  constructor(resultCode, msg, { data, totalCount }) {
    this.resultCode = resultCode || 200
    this.msg = msg || '操作成功'
    if (data) {
      this.data = data
      this.totalCount = totalCount
    }
  }
  success(ctx) {
    // ctx.set("Content-Type", "application/json;charset=utf8mb4")
    ctx.body = this
  }
}

module.exports = SuccessModel
