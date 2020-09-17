cdn方式引入初始化代码(中国地区慢，建议下载到本地工程)  
```js
<script src="https://cdn.jsdelivr.net/npm/dsbridge@3.1.4/dist/dsbridge.js"></script>
```

npm方式安装初始化代码  
```js
npm install dsbridge@3.1.4  

// var dsBridge = require("dsbridge")
//app.js直接引入
import 'dsBridge'
```

注:1.以下调用方法统一返回json字符串,不区分同异步,格式如下：
```js
{
  err: 0,
  message: '返回的消息体'
}
```
2.以下方法均支持同步调用和异步调用,格式如下：
```js
// 同步调用方法
window.dsBridge.call('调用的方法名','传入的参数值,如没有可不写')

// 异步调用方法
window.dsBridge.call('调用的方法名','传入的参数值,如没有可不写',(res) => {})
```

设备存取信息
```js
let key = '这是需要存储或者获取数据的key值'
let value = '这是需要存储的数据,如原始值或者对象'
let obj = {key: value//key1: value1 ... 可同时存储多个}
window.dsBridge.call('setItem',obj,(res) => {
  console.log(res,'数据存储') 
})

window.dsBridge.call('getItem','需要存储的key',(res) => {
  console.log(res,'返回存储的数据') 
})
```

调用原生相机拍照事件,以数组形式返回图片的base64码
```js
// 异步调用相机事件
window.dsBridge.call('b.photos','camera',(res) => {
  console.log(res,'相机返回数据') 
  let response = JSON.parse(res) 
  let images = response.message 
  console.log(images,'图片源') 
  if(images !== null) { 
    this.items = images 
  }
})

// 同步调用相机事件
var images = window.dsBridge.call('b.photos','camera')
```
调起原生相册事件,以数组形式返回图片的base64码
```js
// 异步调用相册选照片事件
window.dsBridge.call('b.photos','photo',(res) => {
  console.log(res,'相册返回数据')
  let response = JSON.parse(res)
  let images = response.message
  console.log(images,'图片源')
  if(images !== null) {
    this.items = images
  }
})

// 同步调用相册事件
var images = window.dsBridge.call('b.photos','photo')
```
调起打电话事件,传入参数为需要拨打的手机号
```js
window.dsBridge.call('callPhone','13838384381',(res) => {
  console.log(res,'打电话？')
})

var mes = window.dsBridge.cal('callPhone','13838384382'))
```
获取当前设备的信息,返回以下数据：  
>**systemVersion** 系统版本  
**systemName** 系统名称  
**model** 设备类型  
**identifierForVendor** 设备唯一码  
**name** 设备名称(用户自定义手机名)  
**localizedModel** 模型  
```js
//同步调用,返回设备信息
var deviceInfo = window.dsBridge.call('getDeviceInfo')

// 异步调用,回调返回设备信息
window.dsBridge.call('getDeviceInfo',(res) => {
  alert(res)
})
```
获取设备deviceToken
```js
// 同步调用,返回设备token
var token = window.dsBridge.call('getDeviceToken')

// 异步调用,回调返回设备token
window.dsBridge.call('getDeviceToken',(res) => {
  alert('获取的deviceToken为：' + JSON.parse(res).deviceToken)
})
```
打开新的页面,支持'http','https','file','weight'等方式
```js

      // window.dsBridge.call('openFrame','http://192.168.0.101:8080',(res) => {
      //   console.log(res)
      // })
window.dsBridge.call('openFrame','weight://index.html')

window.dsBridge.call('openFrame','weight://index.html',(res) => {
  console.log(res)
})
```
