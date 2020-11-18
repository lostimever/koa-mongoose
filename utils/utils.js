const getErrMessage = err => {
  const error = err.errors
  const errorArr = []
  for (const attr in error) {
    errorArr.push(error[attr]['message'])
  }
  return errorArr.toString()
}

module.exports = {
  getErrMessage,
}
