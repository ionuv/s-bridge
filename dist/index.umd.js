!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).sBridge=n()}(this,function(){var e=require("./api/index"),n=require("./photo/index");return function(){function t(e){}var r=t.prototype;return r.hasNativeMethod=function(n,t){return e.hasNativeMethod(n,t)},r.register=function(n,t,r){return e.register(n,t,r)},r.registerAsyn=function(n,t){return e.registerAsyn(n,t)},r.isMobile=function(){return e.isMobile()},r.asyncIsMobile=function(){return e.asyncIsMobile()},r.getItem=function(n){return e.getItem(n)},r.asyncGetItem=function(n){return e.asyncGetItem(n)},r.setItem=function(n){return e.setItem(n)},r.asyncSetItem=function(n){return e.asyncSetItem(n)},r.callPhone=function(n){return e.callPhone(n)},r.asyncCallPhone=function(n){return e.asyncCallPhone(n)},r.getDeviceInfo=function(){return e.getDeviceInfo()},r.asyncGetDeviceInfo=function(){return e.asyncGetDeviceInfo()},r.getDeviceToken=function(){return e.getDeviceToken()},r.asyncGetDeviceToken=function(){return e.asyncGetDeviceToken()},r.openFrame=function(n){return e.openFrame(n)},r.asyncOpenFrame=function(n){return e.asyncOpenFrame(n)},r.getParams=function(){return e.getParams()},r.asyncGetParams=function(){return e.asyncGetParams()},r.closeView=function(){return e.closeView()},r.asyncCloseView=function(){return e.asyncCloseView()},r.takePhoto=function(e){return n.takePhoto(e)},r.getPhotos=function(e){return n.getPhotos(e)},t}()});
//# sourceMappingURL=index.umd.js.map