const dsBridge = require('dsbridge')

// 通用回调
const backBlock = require('../common/index')

// 拍照
const takePhoto = (options) => {
  if(typeof(options) === 'object') {
    options['type'] = 'camera'
    photoswithOptions(options)
  }else {
    photos('camera')
  }
}

// 打开相册获取图片
const getPhotos = (options) => {
  if(typeof(options) === 'object') {
    options['type'] = 'photo'
    photoswithOptions(options)
  }else {
    photos('photo')
  }
}

// 默认参数调起相机或者相册
const photos = (type) => {
  dsBridge.call('photos', type, (res) => {
    backBlock(res)
  })
}

const photoswithOptions = (options) => {
  dsBridge.call('photoswithOptions', options, (res) => {
    backBlock(res)
  })
}

const photo = {
  takePhoto,
  getPhotos
}

exports.default = photo
