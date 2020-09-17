const dsBridge = require('dsbridge')
const photo = require('./photo/index')
// 通用回调
const backBlock = require('./common/index')

// 检测原生是否存在该方法
const hasNativeMethod = function(funcName, type) {
  return dsBridge.hasNativeMethod(funcName, type)
}

// js注册同步方法
const register = function(name, fun, asyn) {
  dsBridge.register(name, fun, asyn)
}

// js注册异步方法
const registerAsyn = function(name, fun) {
  dsBridge.registerAsyn(name, fun)
}

// 判断设备是否是真机 -1未知设备 0真机 1模拟器
const isMobile = function() {
  let res = dsBridge.call('isMobile')
  if(res) {
    let response = JSON.parse(res)
    return response.err
  }else {
    return -1
  }
}

const asyncIsMobile = function() {
  dsBridge.call('isMobile', function(res) {
    if(res) {
      let response = JSON.parse(res)
      return Promise.resolve(response.err)
    }else {
      return Promise.resolve(-1)
    }
  })
}

// 同步获取原生数据
const getItem = function(key) {
  let res = dsBridge.call('getItem',key)
  if(res) {
    let response = JSON.parse(res)
    return response.message
  }else {
    return ''
  }
}

// 异步获取原生数据
const asyncGetItem = function(key) {
  dsBridge.call('getItem',key, function(res) {
    backBlock(res)
  })
}

// 同步存储数据到原生
const setItem = function(obj) {
  return dsBridge.call('setItem', obj)
}

// 异步存储数据到原生
const asyncSetItem = function(obj) {
  dsBridge.call('setItem', obj, function(res) {
    backBlock(res)
  })
}

// 同步打电话
const callPhone = function(mobile) {
  return dsBridge.call('callPhone', mobile)
}

// 异步打电话
const asyncCallPhone = function(mobile) {
  dsBridge.call('callPhone', mobile, function(res) {
    backBlock(res)
  })
}

// 获取设备信息
const getDeviceInfo = function() {
  let res = dsBridge.call('getDeviceInfo')
  if(res) {
    let response = JSON.parse(res)
    return response
  }else {
    return {}
  }
}

// 异步获取设备信息
const asyncGetDeviceInfo = function() {
  dsBridge.call('getDeviceInfo', function(res) {
    backBlock(res)
  })
}

// 获取推送的token
const getDeviceToken = function() {
  let res = dsBridge.call('getDeviceToken')
  if(res) {
    let response = JSON.parse(res)
    return response.deviceToken
  }else {
    return ''
  }
}

// 异步推送的token
const asyncGetDeviceToken = function() {
  dsBridge.call('getDeviceToken', function(res) {
    if(res) {
      let response = JSON.parse(res)
      return Promise.resolve(response.deviceToken)
    }else {
      return Promise.resolve('')
    }
  })
}

// 打开新的web页
const openFrame = function(url) {
  let res = dsBridge.call('openFrame', url)
  if(res) {
    let response = JSON.parse(res)
    return response.message
  }else {
    return ''
  }
}

// 异步打开新的web页
const asyncOpenFrame = function(url) {
  dsBridge.call('openFrame', url, function(res) {
    backBlock(res)
  })
}

// 获取页面注入的参数
const getParams = function() {
  let res = dsBridge.call('getParams')
  if(res) {
    let response = JSON.parse(res)
    return response
  }else {
    return {}
  }
}

// 异步获取页面注入的参数
const asyncGetParams = function() {
  dsBridge.call('getParams', function(res) {
    if(res) {
      let response = JSON.parse(res)
      return Promise.resolve(response)
    }else{
      return Promise.resolve({})
    }
  })
}

// 关闭当前页面
const closeView = function() {
  return dsBridge.call('closeView')
}

// 异步获取页面注入的参数
const asyncCloseView = function() {
  dsBridge.call('closeView', function(res) {
    return Promise.resolve('')
  })
}

module.exports = {
  hasNativeMethod,
  register,
  registerAsyn,
  isMobile,
  asyncIsMobile,
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
