import dsBridge from 'dsbridge'

// 开始语音识别
const startSpeech = (options) => {
  return new Promise((resolve, reject) => {
    dsBridge.call('c.startRecognize', options, (res) => {
      resolve(res)
    })
  })
}

// 打开相册获取图片
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
