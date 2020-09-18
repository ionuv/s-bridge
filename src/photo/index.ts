import dsBridge from 'dsbridge'

// 拍照
const takePhoto = (options: object) => {
  if(typeof(options) === 'object') {
    options['type'] = 'camera'
    return photoswithOptions(options)
  }else {
    return photos('camera')
  }
}

// 打开相册获取图片
const getPhotos = (options: object) => {
  if(typeof(options) === 'object') {
    options['type'] = 'photo'
    return photoswithOptions(options)
  }else {
    return photos('photo')
  }
}

// 默认参数调起相机或者相册
const photos = (type: string) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('b.photos', type, (res) => {
      resolve(res)
    })
  })
}

const photoswithOptions = (options: object) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('b.photoswithOptions', options, (res) => {
      resolve(res)
    })
  })
}

const photo = {
  takePhoto,
  getPhotos
}

export default photo
