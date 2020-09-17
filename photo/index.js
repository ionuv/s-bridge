const dsBridge = require('dsbridge')

// 通用回调
const backBlock = require('../common/index')

// 拍照
const takePhoto = function(options) {
  if(typeof(options) === 'object') {
    options['type'] = 'camera'
    photoswithOptions(options)
  }else {
    photos('camera')
  }
}

// 打开相册获取图片
const getPhotos = function(options) {
  if(typeof(options) === 'object') {
    options['type'] = 'photo'
    photoswithOptions(options)
  }else {
    photos('photo')
  }
}

// 默认参数调起相机或者相册
const photos = function(type) {
  dsBridge.call('photos', type, function(res) {
    backBlock(res)
  })
}

const photoswithOptions = function(options) {
  dsBridge.call('photoswithOptions', options, function(res) {
    backBlock(res)
  })
}

const photo = {
  takePhoto,
  getPhotos
}

exports.default = photo
