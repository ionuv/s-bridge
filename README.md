<!-- cdn方式引入初始化代码(中国地区慢，建议下载到本地工程)  
```js
<script src="https://cdn.jsdelivr.net/npm/dsbridge@3.1.4/dist/dsbridge.js"></script>
``` -->

npm方式安装初始化代码  
```js
npm install s-bridge  

//app.js直接引入
import Bridge from 's-bridge'
Vue.prototype.$sbridge = Bridge
```

**备注:**
>大部分的方法均支持同异步,格式如下：
```js
// 同步调用方法
let deviceInfo = this.$sbridge.getDeviceInfo()
console.log(deviceInfo)

// 异步调用方法
this.$sbridge.asyncGetDeviceInfo().then(res => {
  console.log(res)
})
```
##### `0.通用交互方法`
> 调用原生方法的通用入口 需与原生开发协商
```js
// 推荐使用异步方法 同步方法无返回信息
/**
 * 参数列表 (name, userInfo) 
 * name: 调用原生方法名
 * userInfo: 传入原生参数列表
 */
this.$sbridge.asyncAccessNative('Loginout', {'user': '示例', 'xx': 'xx'}).then(res => {
  console.log(res,'调用Loginout回调')
})
```

##### `1.基础方法调用`
> 1.1、判断当前设备环境 ios android other
```js
let env = this.$sbridge.mobileType()
console.log(env, '当前环境')

this.$sbridge.asyncMobileType().then(res => {
  console.log(res,'当前环境')
})
```

>1.2、存储数据到原生设备
```js
// double直接存储有可能会损失精度,建议转成字符存储

/**
 * setItem(key, value)
 * 'key': String
 * 'value': Object
 */
let obj = {
  key1: 1,
  key2: true,
  key2: 'string',
  key3: {},
  key4: []
}

let res = this.$sbridge.setItem('key1','value1')
console.log(res,'存储数据返回消息')

this.$sbridge.asyncSetItem('key2', obj).then(res => {
  console.log(res,'存储数据返回消息')
})
```

>1.3、获取存储到原生设备的数据
```js
let res = this.$sbridge.getItem('key1')
console.log(res, '获取原生数据')

this.$sbridge.asyncGetItem('key1').then(res => {
  console.log(res, '获取原生数据')
})
```

>1.4、打电话
```js
let res = this.$sbridge.callPhone('13838384382')
console.log(res, '调起打电话')

this.$sbridge.asyncCallPhone('13838384382').then(res => {
  console.log(res, '调起打电话')
})
```

>1.5、获取设备信息
```js
/**
 * 返回的设备信息
 * systemVersion 系统版本 
 * systemName 系统名称  
 * identifierForVendor 设备唯一码
 * name 设备名称(用户自定义手机名)
 * ip ip地址
 * mac mac地址
*/
let deviceInfo = this.$sbridge.getDeviceInfo()
console.log(deviceInfo, '设备信息')

this.$sbridge.asyncGetDeviceInfo().then(res => {
  console.log(deviceInfo, '设备信息')
})
```

>1.6、获取推送的deviceToken
```js
let token = this.$sbridge.getDeviceToken()
console.log(token, '获取设备token')

this.$sbridge.asyncGetDeviceToken().then(res => {
  console.log('获取设备token：' + res)
})
```

>1.7、打开新的web页面
```js
/**
 * openFrame参数支持如下：
 * options = {
 *  url, 访问地址
 *  isHiddenNavigate, 是否隐藏导航栏 默认隐藏
 *  title 导航栏标题
 * }
 * 
 * url支持以下访问方式
 * 1.http://
 * 2.https://
 * 3.file:///
 * 4.其它自定义文件协议如: weight://
 * 
 * 保证原生项目根目录下存在该协议名称的目录
 * */ 
this.$sbridge.openFrame({url:'http://www.baidu.com'})

this.$sbridge.asyncOpenFrame({url:'weight://index.html'}).then(res => {
  console.log(res,'返回消息')
})
```

>1.8、获取打开web页时原生注入到页面的参数
```js
let params = this.$sbridge.getParams()
console.log(res, '原生注入到当前页的参数列表')

this.$sbridge.asyncGetParams(]).then(res => {
  console.log(res,'原生注入到当前页的参数列表')
})
```

>1.9、关闭当前web页
```js
// 若当前web页为原生的根视图,则关闭无效
this.$sbridge.closeView()

this.$sbridge.asyncCloseView().then(res => {
  console.log(res, '关闭页面')
})
```

>1.10、调用原生相机拍照事件,以数组形式返回图片的base64码
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
  let images = response.data.images
  console.log(images,'图片源数组')
})
```

>1.11、调起原生相册事件,以数组形式返回图片的base64码
```js
/**
 * 不支持同步调用
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
  let images = response..data.images
  console.log(images,'图片源数组')
})
```
>1.12、获取原生状态栏导航栏等高度
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
>1.13、获取当前加载web页的信息参数
```js
/*
response.message = {
  //appid
  "appid",
  //文件协议类型名
  "agreement",
  //app版本号
  "appVersion",
  //当前本地web环境版本号
  "webVersion",
}
*/
this.$sbridge.getWebInfo()

this.$sbridge.asyncGetWebInfo().then(res => {
  console.log(res,'返回web页的信息参数')
})
```
>1.14、获取本地web资源更新
```js
/*
仅支持本地文件加载方式更新
  options = {
    appVersion, app版本号
    webVersion, web资源更新版本号
    updateUrl,  web资源更新地址
    isTips      是否弹框提示更新
  }
*/

this.$sbridge.asyncGetAppUpdate({
  appVersion: '1.0.0',
  webVersion: '1.0.0',
  updateUrl: 'http://www.baidu.com',
  isTips: false
}).then(res => {
  console.log(res,'更新结果')
})
```
>1.15、调起二维码识别
```js
// 不支持同步
this.$sbridge.asyncQrCodeIdentification().then(res => {
  console.log(res,'更新结果')
})
```
>1.16、清空web端缓存
```js
/**
 * option: web | file | all 当前需要清空缓存的资源类型 
 */
this.$sbridge.cleanCache(option)

this.$sbridge.asyncCleanCache(option).then(res => {
  console.log(res,'清空结果')
})
```
>1.16、跳转页面(用于替代模块3的功能)
```js
/**
 * 参数列表
 * url 跳转页面需要加载的url
 * params 新增到页面的参数列表
 * direction 页面跳转方法 push|pop 默认为push (跳转或者返回)
 * title 导航栏标题 isHiddenNavigate为true时展示
 * isHiddenNavigate 是否隐藏导航栏 true|false 默认true
 * isHiddenTabbar 是否隐藏导航栏 true|false 默认true
 */
this.$sbridge.jumpFrame('chose-customertype', {}, 'push', '标题栏')

this.$sbridge.asyncJumpFrame('https://www.baidu.com', {}, 'push', '标题栏').then(res => {
  console.log(res,'清空结果')
})
```
>1.17、调起地图定位
```js
/**
 * 参数列表
 * showMap 是否显示地图 默认false
 * title 显示地图时的标题栏 
 * @retrun 返回gcj02和bd坐标
 */

this.$sbridge.asyncLocation(true, '地图定位').then(res => {
  console.log(res, '地图定位坐标点及地址')
})
```


##### `2.以下为可选项，请确认原生是否添加该功能`
>2.1、调起语音识别
```js
// options暂未定义
// 不支持同步调用
this.$sbridge.startSpeech().then(res => {
  console.log(res,'语音识别结果')
})
```
>2.2、关闭语音识别
```js
this.$sbridge.stopSpeech()

this.$sbridge.stopSpeech().then(res => {
  console.log(res,'关闭语音识别')
})
```
##### `3.以下为可选模块`
>3.1、新模块跳转到crm老模块中
```js
/**
 * pageName: 跳转模块名称
 * direction: push|pop 跳转方式
 * params: 需要传递给老模块的参数列表 对象形式或者&key=value形式
 */
this.$sbridge.newToOriginModule('pageName','push','&key=value')
```

>3.2、crm老模块跳转到新模块中
```js
/**
 * url: 新模块跳转的url
 * direction: push|pop 跳转方式
 * params: 需要传递给老模块的参数列表
 */ 
this.$sbridge.originToNewModule('url', 'push', {key: value})
```
