const mongoose = require('mongoose')
const { logger } = require('../middleWares/logger')

const DB_ADDRESS = 'mongodb://95.169.18.94:27017'
const options = {
  dbName: 'dmsmarket',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: 'root',
  pass: 'root',
}

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose
  .connect(DB_ADDRESS, options)
  .then(() => {
    logger.info('[Mongoose] database connect success!')
  })
  .catch(err => {
    logger.fatal({ msg: '[Mongoose] database connect failed!', err })
  })

module.exports = mongoose
