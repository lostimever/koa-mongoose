const path = require('path')

const PORT = 8088

const CORS = {
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
  maxAge: 100,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'X-Custom-Header',
    'anonymous',
  ],
}

const logPath = path.join(__dirname, '../logs/info')
const LOGINFO = {
  disableClustering: true, //pm2集群模式下使用log4js
  appenders: {
    console: { type: 'console' },
    dateFile: {
      category: 'dateFileLog',
      type: 'dateFile',
      filename: logPath,
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: {
      appenders: ['console', 'dateFile'],
      level: 'info',
    },
  },
  // appenders: {
  //   fileout: {
  //     type: 'DateFile',
  //     category: 'dateFileLog',
  //     filename: path.join(__dirname, '../logs/info/'),
  //     pattern: 'yyyy-MM-dd.log',
  //     alwaysIncludePattern: true,
  //   },
  //   datafileout: {
  //     type: 'dateFile',
  //     filename: path.join(__dirname, '../logs/datafileout.log'),
  //     pattern: '.yyyy-MM-dd-hh-mm-ss-SSS',
  //   },
  //   consoleout: { type: 'console' },
  // },
  // categories: {
  //   default: { appenders: ['fileout'], level: 'info' },
  //   error: { appenders: ['fileout', 'datafileout'], level: 'error' },
  // },
}

module.exports = {
  PORT,
  CORS,
  LOGINFO,
  logPath,
}
