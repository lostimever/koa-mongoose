const UploadController = require('../controller/UploadController')
const {
  SUCCESS,
  USER_NO_PERMISSION,
  USER_ACCOUNT_NOT_EXIST,
  USER_ACCOUNT_ALREADY_EXIST,
  PARAM_IS_BLANK,
} = require('../utils/resultCode')

const { getErrMessage } = require('../utils/utils')

class UploadService {
  async upload(ctx, next) {
    const file = ctx.request.files.file
    const fileName = file.name
    const path = await UploadController.upload(ctx, {
      file,
      fileName,
    })
    await SUCCESS(ctx, { data: { filePath: path } })
    next()
  }
}

module.exports = new UploadService()
