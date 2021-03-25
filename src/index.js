import api from '../src/api/index'
import photo from '../src/photo/index'
import speech from '../src/speech/index'
import moduleJump from '../src/moduleJump/index'

class Bridge {
  /**
   * 判断原生是否有该方法
   * funcName: 需要判断的方法名,可以包含命名空间
   * type: 可选参数，["all"|"syn"|"asyn" ], 默认是 "all".
  */
  hasNativeMethod(funcName, type) {
    return api.hasNativeMethod(funcName, type)
  }

  /******** js不支持重载 所以不支持同名的同异步方法的注册*******/
  // 注册同步方法给原生调用
  register(name, fun, asyn) {
    api.register(name, fun, asyn)
  }
  
  // js注册异步方法
  registerAsyn(name, fun) {
    return api.registerAsyn(name, fun)
  }

  // 判断设备是否是真机 -1未知设备 0真机 1模拟器
  mobileType() {
    return api.mobileType()
  }
  // 判断设备是否是真机 -1未知设备 0真机 1模拟器
  asyncMobileType() {
    return api.asyncMobileType()
  }

  // 同步获取原生数据
  getItem(key) {
    return api.getItem(key)
  }

  // 异步获取原生数据
  asyncGetItem(key) {
    return api.asyncGetItem(key)
  }

  // 同步存储数据到原生
  setItem(key, obj) {
    return api.setItem(key, obj)
  }

  // 异步存储数据到原生
  asyncSetItem(key, obj) {
    return api.asyncSetItem(key, obj)
  }

  // 同步打电话
  callPhone(mobile) {
    return api.callPhone(mobile)
  }

  // 异步打电话
  asyncCallPhone(mobile) {
    return api.asyncCallPhone(mobile)
  }

  // 获取设备信息
  getDeviceInfo() {
    return api.getDeviceInfo()
  }

  // 异步获取设备信息
  asyncGetDeviceInfo() {
    return api.asyncGetDeviceInfo()
  }

  // 获取推送的token
  getDeviceToken() {
    return api.getDeviceToken()
  }

  // 异步推送的token
  asyncGetDeviceToken() {
    return api.asyncGetDeviceToken()
  }

  // 打开新的web页
  openFrame(url) {
    return api.openFrame(url)
  }

  // 异步打开新的web页
  asyncOpenFrame(url) {
    return api.asyncOpenFrame(url)
  }

  // 获取页面注入的参数
  getParams() {
    return api.getParams()
  }

  // 异步获取页面注入的参数
  asyncGetParams() {
    return api.asyncGetParams()
  }

  // 关闭当前页面
  closeView() {
    return api.closeView()
  }

  // 异步关闭当前页面
  asyncCloseView() {
    return api.asyncCloseView()
  }

  // 获取原生状态栏导航栏等高度
  getStatusHeight() {
    return api.getStatusHeight()
  }

  // 异步获取原生状态栏导航栏等高度
  asyncGetStatusHeight() {
    return api.asyncGetStatusHeight()
  }

  // 获取当前加载web页的信息参数
  getWebInfo() {
    return api.getWebInfo()
  }

  // 异步获取当前加载web页的信息参数
  asyncGetWebInfo() {
    return api.asyncGetWebInfo()
  }

  // 异步更新当前web应用
  asyncGetWebAppUpdate(obj) {
    return api.asyncGetWebAppUpdate(obj)
  }

  // 调起拍照
  takePhoto(options) {
    if(api.hasNativeMethod('takePhoto')) {
      return api.takePhoto(options)
    }else {
      return photo.takePhoto(options)
    }
  }

  // 调起相册选择
  getPhotos(options) {
    if(api.hasNativeMethod('getPhotos')) {
      return api.getPhotos(options)
    }else {
      return photo.getPhotos(options)
    }
  }

  // 开始语音识别
  startSpeech(options) {
    return speech.startSpeech(options)
  }

  // 停止语音识别
  stopSpeech() {
    return speech.stopSpeech()
  }

  // 异步二维码识别
  asyncQrCodeIdentification() {
    return api.asyncQrCodeIdentification()
  }

  // 新模块跳转老模块
  newToOriginModule(pageName, direction, otherParams) {
    return moduleJump.newToOriginModule(pageName, direction, otherParams)
  }

  // 老模块跳转新模块
  originToNewModule(url, direction, otherParams) {
    return moduleJump.originToNewModule(url, direction, otherParams)
  }

  // 清空web缓存
  cleanCache(key) {
    return api.cleanCache(key)
  }

  // 异步清空web缓存
  asyncCleanCache(key) {
    return api.asyncCleanCache(key)
  }

  // 统一调用原生入口
  accessNative(name, userInfo) {
    return api.accessNative(name, userInfo)
  }

  // 异步统一调用原生入口
  asyncAccessNative(name, userInfo) {
    return api.asyncAccessNative(name, userInfo)
  }

  // 跳转web页
  jumpFrame(url, isHiddenNavigate = true, isHiddenTabbar = true, title = '', direction = 'push', params = {}) {
    return api.jumpFrame(url, isHiddenNavigate, isHiddenTabbar, title, direction, params)
  }

  // 跳转web页
  asyncJumpFrame(url, isHiddenNavigate = true, isHiddenTabbar = true, title = '', direction = 'push', params = {}) {
    return api.asyncJumpFrame(url, isHiddenNavigate, isHiddenTabbar, title, direction, params)
  }
}

export default new Bridge()
