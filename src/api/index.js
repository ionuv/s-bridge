import dsBridge from 'dsbridge'

// 处理原生返回的数据
function result(res) {
  if(res) {
    let response = JSON.parse(res)
    return response || {}
  }else {
    return {}
  }
}

// 检测原生是否存在该方法
const hasNativeMethod = (funcName, type) => {
  return dsBridge.hasNativeMethod(funcName, type)
}

// js注册同步方法
const register = (name, fun, asyn) => {
  dsBridge.register(name, fun, asyn)
}

// js注册异步方法
const registerAsyn = (name, fun) => {
  dsBridge.registerAsyn(name, fun)
}

// 判断设备是否是真机 ios android other
const mobileType = () => {
  let res = dsBridge.call('mobileType')
  let data = result(res).data || {}
  return data.mobileType || 'other'
}

const asyncMobileType = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('mobileType', (res) => {
      let data = result(res).data || {}
      resolve(data.mobileType || 'other')
    })
  })
}

// 同步获取原生数据
const getItem = (key) => {
  let res = dsBridge.call('getItem',key)
  let data = result(res).data || {}
  return data[key] || ''
}

// 异步获取原生数据
const asyncGetItem = (key) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getItem',key, (res) => {
      let data = result(res).data || {}
      resolve(data[key] || '')
    })
  })
}

// 同步存储数据到原生
const setItem = (obj) => {
  let res = dsBridge.call('setItem', obj)
  return result(res)
}

// 异步存储数据到原生
const asyncSetItem = (obj) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('setItem', obj, (res) => {
      resolve(result(res))
    })
  })
}

// 同步打电话
const callPhone = (mobile) => {
  let res = dsBridge.call('callPhone', mobile)
  return result(res)
}

// 异步打电话
const asyncCallPhone = (mobile) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('callPhone', mobile, (res) => {
      resolve(result(res))
    })
  })
}

// 获取设备信息
const getDeviceInfo = () => {
  let res = dsBridge.call('getDeviceInfo')
  let data = result(res).data || {}
  return data
}

// 异步获取设备信息
const asyncGetDeviceInfo = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getDeviceInfo', (res) => {
      let data = result(res).data || {}
      resolve(data)
    })
  })
}

// 获取推送的token
const getDeviceToken = () => {
  let res = dsBridge.call('getDeviceToken')
  let data = result(res).data || {}
  return data.deviceToken || ''
}

// 异步推送的token
const asyncGetDeviceToken = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getDeviceToken', (res) => {
      let data = result(res).data || {}
      resolve(data.deviceToken || '')
    })
  })
}

// 打开新的web页
const openFrame = (url) => {
  let res = dsBridge.call('openFrame', url)
  return result(res)
}

// 异步打开新的web页
const asyncOpenFrame = (options) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('openFrame', options, (res) => {
      resolve(result(res))
    })
  })
}

// 获取页面注入的参数
const getParams = () => {
  let res = dsBridge.call('getParams')
  let data = result(res).data || {}
  return data
}

// 异步获取页面注入的参数
const asyncGetParams = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getParams', (res) => {
      let data = result(res).data || {}
      resolve(data)
    })
  })
}

// 关闭当前页面
const closeView = () => {
  let res = dsBridge.call('closeView')
  return result(res)
}

// 异步关闭当前页面
const asyncCloseView = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('closeView', (res) => {
      resolve(result(res))
    })
  })
}

// 获取原生状态栏导航栏等高度
const getStatusHeight = () => {
  let res = dsBridge.call('getStatusHeight')
  let data = result(res).data || {}
  return data
}

// 异步获取原生状态栏导航栏等高度
const asyncGetStatusHeight = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getStatusHeight', (res) => {
      let data = result(res).data || {}
      resolve(data)
    })
  })
}
// 获取当前加载web页的信息参数
const getWebInfo = () => {
  let res = dsBridge.call('getWebInfo')
  let data = result(res).data || {}
  return data
}

// 异步获取当前加载web页的信息参数
const asyncGetWebInfo = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getWebInfo', (res) => {
      let data = result(res).data || {}
      resolve(data)
    })
  })
}

// 异步更新当前web应用
const asyncGetWebAppUpdate = (obj) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getWebAppUpdate', obj, (res) => {
      resolve(result(res))
    })
  })
}

// 拍照
const takePhoto = (options) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('takePhoto', options, (res) => {
      resolve(result(res))
    })
  })
}

// 打开相册获取图片
const getPhotos = (options) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getPhotos', options, (res) => {
      resolve(result(res))
    })
  })
}

const bridge = {
  hasNativeMethod,
  register,
  registerAsyn,
  mobileType,
  asyncMobileType,
  getItem,
  asyncGetItem,
  setItem,
  asyncSetItem,
  callPhone,
  asyncCallPhone,
  getDeviceInfo,
  asyncGetDeviceInfo,
  getDeviceToken,
  asyncGetDeviceToken,
  openFrame,
  asyncOpenFrame,
  getParams,
  asyncGetParams,
  closeView,
  asyncCloseView,
  getStatusHeight,
  asyncGetStatusHeight,
  getWebInfo,
  asyncGetWebInfo,
  asyncGetWebAppUpdate,
  takePhoto,
  getPhotos
}

export default bridge
