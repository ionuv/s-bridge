import n from"dsbridge";var e=function(e){return new Promise(function(t,r){n.call("b.photos",e,function(n){t(n)})})},t=function(e){return new Promise(function(t,r){n.call("b.photoswithOptions",e,function(n){t(n)})})},r=function(){function r(){}var o=r.prototype;return o.hasNativeMethod=function(e,t){return function(e,t){return n.hasNativeMethod(e,t)}(e,t)},o.register=function(e,t,r){!function(e,t,r){n.register(e,t,r)}(e,t,r)},o.registerAsyn=function(e,t){return function(e,t){n.registerAsyn(e,t)}(e,t)},o.isMobile=function(){return(e=n.call("isMobile"))?JSON.parse(e).err:-1;var e},o.asyncIsMobile=function(){return new Promise(function(e,t){n.call("isMobile",function(n){if(n){var t=JSON.parse(n);e(t.err)}else e(-1)})})},o.getItem=function(e){return function(e){var t=n.call("getItem",e);return t?JSON.parse(t).message:""}(e)},o.asyncGetItem=function(e){return function(e){return new Promise(function(t,r){n.call("getItem",e,function(n){t(n||"")})})}(e)},o.setItem=function(e){return function(e){return n.call("setItem",e)}(e)},o.asyncSetItem=function(e){return function(e){return new Promise(function(t,r){n.call("setItem",e,function(n){t(n)})})}(e)},o.callPhone=function(e){return function(e){return n.call("callPhone",e)}(e)},o.asyncCallPhone=function(e){return function(e){return new Promise(function(t,r){n.call("callPhone",e,function(n){t(n)})})}(e)},o.getDeviceInfo=function(){return n.call("getDeviceInfo")||{}},o.asyncGetDeviceInfo=function(){return new Promise(function(e,t){n.call("getDeviceInfo",function(n){e(n||{})})})},o.getDeviceToken=function(){return(e=n.call("getDeviceToken"))?JSON.parse(e).deviceToken:"";var e},o.asyncGetDeviceToken=function(){return new Promise(function(e,t){n.call("getDeviceToken",function(n){if(n){var t=JSON.parse(n);e(t?t.deviceToken:"")}else e("")})})},o.openFrame=function(e){return function(e){var t=n.call("openFrame",e);return t?JSON.parse(t).message:""}(e)},o.asyncOpenFrame=function(e){return function(e){return new Promise(function(t,r){n.call("openFrame",e,function(n){t(n)})})}(e)},o.getParams=function(){return(e=n.call("getParams"))?JSON.parse(e):{};var e},o.asyncGetParams=function(){return new Promise(function(e,t){n.call("getParams",function(n){if(n){var t=JSON.parse(n);e(t||{})}else e({})})})},o.closeView=function(){return n.call("closeView")},o.asyncCloseView=function(){return new Promise(function(e,t){n.call("closeView",function(n){e(JSON.stringify({err:0,message:"关闭成功"}))})})},o.takePhoto=function(n){return function(n){return"object"==typeof n?(n.type="camera",t(n)):e("camera")}(n)},o.getPhotos=function(n){return function(n){return"object"==typeof n?(n.type="photo",t(n)):e("photo")}(n)},r}();export default r;
//# sourceMappingURL=index.modern.mjs.map
