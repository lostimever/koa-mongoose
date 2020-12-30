const {
  existsSync,
  mkdirSync,
  createReadStream,
  createWriteStream,
} = require('fs')
const path = require('path')
const Moment = require('moment')

class UploadController {
  async upload(ctx, { file, fileName }) {
    const BASE_PATH = `./assets`
    const render = createReadStream(file.path)
    const TIMEDIR = Moment(new Date()).format('YYYYMMDD')
    let filePath = path.join(BASE_PATH, `upload/${TIMEDIR}`, fileName)

    return await new Promise((resolve, reject) => {
      const fileDir = path.join(BASE_PATH, `upload/${TIMEDIR}`)
      if (!existsSync(fileDir)) {
        const dir = mkdirSync(fileDir, { recursive: true })
        if (dir) {
          reject()
        }
      }
      // 创建写入流
      const upStream = createWriteStream(filePath)
      render.pipe(upStream)
      filePath = filePath.replace(/\\/g, '/')
      filePath = filePath.replace('assets', '')
      resolve(`http://localhost:8088${filePath}`)
    })
  }
}

module.exports = new UploadController()
