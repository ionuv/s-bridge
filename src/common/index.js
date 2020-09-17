const backBlock = (res) => {
  if(res) {
    let response = JSON.parse(res)
    return response.message
  }else {
    return ''
  }
}

exports.default = backBlock
