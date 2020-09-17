const backBlock = function(res) {
  if(res) {
    let response = JSON.parse(res)
    if(response.err === 0) {
      return Promise.resolve(response.message)
    }else {
      return Promise.reject(response.message)
    }
  }else {
    return Promise.resolve('')
  }
}
exports.default = backBlock
