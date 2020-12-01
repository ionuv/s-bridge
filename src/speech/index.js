/*
 * @Author: Yu Xin
 * @Date: 2020-10-23 10:19:27
 * @LastEditors: Yu Xin
 * @LastEditTime: 2020-12-02 00:14:29
 * @Description: file content
 */
import dsBridge from 'dsbridge'

// 开始语音识别
const startSpeech = (options) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('c.startRecognize', options, (res) => {
      resolve(res)
    })
  })
}

// 停止语音识别
const stopSpeech = () => {
  return new Promise((resolve, reject) => {
    dsBridge.call('c.stopRecognize', '', (res) => {
      resolve(res)
    })
  })
}

const speech = {
  startSpeech,
  stopSpeech
}

export default speech
