/*
 * @Author: Yu Xin
 * @Date: 2020-12-08 19:50:51
 * @LastEditors: Yu Xin
 * @LastEditTime: 2021-03-24 10:47:27
 * @Description: file content
 */
import dsBridge from 'dsbridge'

// 新模块跳转老模块
const newToOriginModule = (pageName, direction = 'push', otherParams) => {
  let params = {
    pageName: pageName,
    direction: direction,
  }
  if (typeof otherParams === 'string') {
    if(/\&[\w\W]*=[\w\W]*/.test(otherParams)) {
      let temp = otherParams.split('&')
      for (const keyValues in temp) {
        let ele = temp[keyValues]
        if(ele) {
          let keyValue = ele.split('=')
          params.otherParams[keyValue[0]] = keyValue[1]
        }
      }
    }else {
      console.warn('otherParams类型与要求不符')
      return false
    }
  }
  if (typeof otherParams === 'object') {
    let temp = ''
    for (const key in otherParams) {
      temp = `&${key}=${otherParams[key]}`
    }
    params.otherParams = temp
  }
  return dsBridge.call('origin.newToOriginModule', params)
}

// 老模块跳转新模块
const originToNewModule = (url, direction = 'push', otherParams) => {
  if (typeof otherParams !== 'object') {
    console.warn('otherParams必须为对象')
    return false
  }

  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  if (isiOS && plus) {
    let params = {
      url: url,
      direction: direction,
      otherParams: otherParams
    }
    let notiClass = plus.ios.importClass("NSNotificationCenter");
    notiClass.defaultCenter().postNotificationNameobject("originToNewModule", JSON.stringify(params));
  }
  if (isAndroid && android) {
    window.android.originToNewModule(url, direction, JSON.stringify(otherParams))
  }
}

const moduleJump = {
  newToOriginModule,
  originToNewModule
}

export default moduleJump
