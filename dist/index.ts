import api from '../src/api/index'
import photo from '../src/photo/index'
import speech from '../src/speech/index'

export default class Bridge {
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
  isMobile() {
    return api.isMobile()
  }
  // 判断设备是否是真机 -1未知设备 0真机 1模拟器
  asyncIsMobile() {
    return api.asyncIsMobile()
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
  setItem(obj) {
    return api.setItem(obj)
  }

  // 异步存储数据到原生
  asyncSetItem(obj) {
    return api.asyncSetItem(obj)
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

  // 调起拍照
  takePhoto(options) {
    return photo.takePhoto(options)
  }

  // 调起相册选择
  getPhotos(options) {
    return photo.getPhotos(options)
  }

  // 开始语音识别
  startSpeech(options) {
    return speech.startSpeech(options)
  }

  // 停止语音识别
  stopSpeech() {
    return speech.stopSpeech()
  }
}
