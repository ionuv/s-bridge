const dsBridge = require('dsbridge')
const photo = require('./photo/index')
// 通用回调
const backBlock = require('./common/index')

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

// 判断设备是否是真机 -1未知设备 0真机 1模拟器
const isMobile = () => {
  let res = dsBridge.call('isMobile')
  if(res) {
    let response = JSON.parse(res)
    return response.err
  }else {
    return -1
  }
}

const asyncIsMobile = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('isMobile', (res) => {
      if(res) {
        let response = JSON.parse(res)
        // return Promise.resolve(response.err)
        resolve(response.err)
      }else {
        // return Promise.resolve(-1)
        resolve(-1)
      }
    })
  })
}

// 同步获取原生数据
const getItem = (key) => {
  let res = dsBridge.call('getItem',key)
  if(res) {
    let response = JSON.parse(res)
    return response.message
  }else {
    return ''
  }
}

// 异步获取原生数据
const asyncGetItem = (key) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getItem',key, (res) => {
      if(res) {
        let response = JSON.parse(res)
        if(response) {
          resolve(response)
        }else {
          resolve(res)
        }
      }else {
        resolve('')
      }
    })
  })
}

// 同步存储数据到原生
const setItem = (obj) => {
  return dsBridge.call('setItem', obj)
}

// 异步存储数据到原生
const asyncSetItem = (obj) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('setItem', obj, (res) => {
      resolve(res)
    })
  })
}

// 同步打电话
const callPhone = (mobile) => {
  return dsBridge.call('callPhone', mobile)
}

// 异步打电话
const asyncCallPhone = (mobile) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('callPhone', mobile, (res) => {
      resolve(res)
    })
  })
}

// 获取设备信息
const getDeviceInfo = () => {
  let res = dsBridge.call('getDeviceInfo')
  if(res) {
    let response = JSON.parse(res)
    return response
  }else {
    return {}
  }
}

// 异步获取设备信息
const asyncGetDeviceInfo = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getDeviceInfo', (res) => {
      if(res) {
        let response = JSON.parse(res)
        if(response) {
          resolve(response)
        }else {
          resolve(res)
        }
      }else {
        resolve({})
      }
    })
  })
}

// 获取推送的token
const getDeviceToken = () => {
  let res = dsBridge.call('getDeviceToken')
  if(res) {
    let response = JSON.parse(res)
    return response.deviceToken
  }else {
    return ''
  }
}

// 异步推送的token
const asyncGetDeviceToken = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getDeviceToken', (res) => {
      if(res) {
        let response = JSON.parse(res)
        if(response) {
          resolve(response.deviceToken)
        }else {
          resolve('')
        }
      }else {
        resolve('')
      }
    })
  })
}

// 打开新的web页
const openFrame = (url) => {
  let res = dsBridge.call('openFrame', url)
  if(res) {
    let response = JSON.parse(res)
    return response.message
  }else {
    return ''
  }
}

// 异步打开新的web页
const asyncOpenFrame = (url) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('openFrame', url, (res) => {
      resolve(res)
    })
  })
}

// 获取页面注入的参数
const getParams = () => {
  let res = dsBridge.call('getParams')
  if(res) {
    let response = JSON.parse(res)
    return response
  }else {
    return {}
  }
}

// 异步获取页面注入的参数
const asyncGetParams = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('getParams', (res) => {
      if(res) {
        let response = JSON.parse(res)
        if(response) {
          resolve(response)
        }else {
          resolve('')
        }
      }else{
        resolve({})
      }
    })
  })
}

// 关闭当前页面
const closeView = () => {
  return dsBridge.call('closeView')
}

// 异步关闭当前页面
const asyncCloseView = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('closeView', (res) => {
      resolve('关闭成功')
    })
  })
}

module.exports = {
  hasNativeMethod,
  register,
  registerAsyn,
  isMobile,
  asyncIsMobile,
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
  photo
}
