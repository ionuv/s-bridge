<!-- cdn方式引入初始化代码(中国地区慢，建议下载到本地工程)  
```js
<script src="https://cdn.jsdelivr.net/npm/dsbridge@3.1.4/dist/dsbridge.js"></script>
``` -->

npm方式安装初始化代码  
```js
npm install s-bridge  

// var Bridge = require("s-bridge")
//app.js直接引入
import Bridge from 's-bridge'
Vue.prototype.$sbridge = new Bridge()
```

**备注:**
>大部分的方法均支持同异步,格式如下：
```js
// 同步调用方法
let deviceInfo = this.$sbridge.getDeviceInfo()
alert(deviceInfo)

// 异步调用方法
this.$sbridge.asyncGetDeviceInfo().then(res => {
  alert(res)
})
```
**方法调用**  
>1.判断当前设备环境 0真机 1模拟器 -1未知设备
```js
let env = this.$sbridge.isMobile()
console.log(env, '当前环境')

this.$sbridge.asyncIsMobile().then(res => {
  console.log(res,'当前环境')
})
```

>2.存储数据到原生设备
```js
// double直接存储有可能会损失精度,建议转成字符存储
let obj = {
  key1: 1,
  key2: true,
  key2: 'string',
  key3: {},
  key4: []
}

let res = this.$sbridge.setItem(obj)
console.log(res,'存储数据返回消息')

this.$sbridge.asyncSetItem(obj).then(res => {
  console.log(res,'存储数据返回消息')
})
```

>3.获取存储到原生设备的数据
```js
let res = this.$sbridge.getItem('key1')
console.log(res, '获取原生数据')

this.$sbridge.asyncGetItem('key1').then(res => {
  alert(res, '获取原生数据')
})
```

>4.打电话
```js
let res = this.$sbridge.callPhone('13838384382')
console.log(res, '调起打电话')

this.$sbridge.asyncCallPhone('13838384382').then(res => {
  console.log(res, '调起打电话')
})
```

>5.获取设备信息
```js
/**
 * 返回的设备信息
 * systemVersion 系统版本 
 * systemName 系统名称  
 * model 设备类型
 * identifierForVendor 设备唯一码
 * name 设备名称(用户自定义手机名)
 * localizedModel 模型
*/
let deviceInfo = this.$sbridge.getDeviceInfo()
console.log(deviceInfo, '设备信息')

this.$sbridge.asyncGetDeviceInfo().then(res => {
  console.log(deviceInfo, '设备信息')
})
```

>6.获取推送的deviceToken
```js
let token = this.$sbridge.getDeviceToken()
console.log(token, '获取设备token')

this.$sbridge.asyncGetDeviceToken().then(res => {
  alert('获取设备token：' + res)
})
```

>7.打开新的web页面
```js
/**
 * openFrame参数支持如下：
 * 1.http://
 * 2.https://
 * 3.file:///
 * 4.其它自定义文件协议如: weight://
 * 
 * 保证原生项目根目录下存在该协议名称的目录
 * */ 
this.$sbridge.openFrame('http://www.baidu.com')

this.$sbridge.asyncOpenFrame('weight://index.html').then(res => {
  console.log(res,'返回消息')
})
```

>8.获取打开web页时原生注入到页面的参数
```js
let params = this.$sbridge.getParams()
console.log(res, '原生注入到当前页的参数列表')

this.$sbridge.asyncGetParams(]).then(res => {
  console.log(res,'原生注入到当前页的参数列表')
})
```

>9.关闭当前web页
```js
// 若当前web页为原生的根视图,则关闭无效
this.$sbridge.closeView()

this.$sbridge.asyncCloseView().then(res => {
  console.log(res, '关闭页面')
})
```

>10.调用原生相机拍照事件,以数组形式返回图片的base64码
```js
/**
 * takePhoto(options)
 * options:可选参数列表
 * {
 *   编辑后是否保存图片到相册
 *   saveNewImageAfterEdit: true|false
 * }
*/
this.$sbridge.takePhoto().then(res => {
  let response = JSON.parse(res)
  let images = response.message
  console.log(images,'图片源数组')
})
```

>11.调起原生相册事件,以数组形式返回图片的base64码
```js
/**
 * getPhotos(options)
 * options:可选参数列表
 * {
 *   相册可选择图片张数:最少1张,最多9张
 *   maxSelectCount:[1-9],
 *   编辑后是否保存图片到相册
 *   saveNewImageAfterEdit: true|false
 * }
*/
this.$sbridge.getPhotos({
  maxSelectCount:2
}).then(res => {
  let response = JSON.parse(res)
  let images = response.message
  console.log(images,'图片源数组')
})
```
>12.调起语音识别
```js
// options暂未定义
this.$sbridge.startSpeech().then(res => {
  console.log(res,'语音识别结果')
})
```
>13.关闭语音识别
```js
this.$sbridge.stopSpeech()

this.$sbridge.stopSpeech().then(res => {
  console.log(res,'关闭语音识别')
})
```
>14.获取原生状态栏导航栏等高度
```js
/*
response.message = {
  //状态栏高度
  "StatusBarHeight",
  //导航栏高度
  "NavBarHeight",
  //状态栏和导航栏总高度
  "NavBarAndStatusBarHeight",
  //TabBar高度
  "TabBarHeight",
  //顶部安全区域远离高度
  "TopBarSafeHeight",
  //底部安全区域远离高度
  "BottomSafeHeight",
  //iPhoneX的状态栏高度差值
  "TopBarDifHeight",
  //导航条和Tabbar总高度
  "NavAndTabHeight",
}
*/
this.$sbridge.getStatusHeight()

this.$sbridge.asyncGetStatusHeight().then(res => {
  console.log(res,'返回高度')
})
```
