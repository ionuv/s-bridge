import e from"dsbridge";const r=r=>new Promise((t,n)=>{e.call("b.photos",r,e=>{t(e)})}),t=r=>new Promise((t,n)=>{e.call("b.photoswithOptions",r,e=>{t(e)})});export default class{constructor(e){}hasNativeMethod(r,t){return((r,t)=>e.hasNativeMethod(r,t))(r,t)}register(r,t,n){((r,t,n)=>{e.register(r,t,n)})(r,t,n)}registerAsyn(r,t){return((r,t)=>{e.registerAsyn(r,t)})(r,t)}isMobile(){return(()=>{let r=e.call("isMobile");return r?JSON.parse(r).err:-1})()}asyncIsMobile(){return new Promise((r,t)=>{e.call("isMobile",e=>{if(e){let t=JSON.parse(e);r(t.err)}else r(-1)})})}getItem(r){return(r=>{let t=e.call("getItem",r);return t?JSON.parse(t).message:""})(r)}asyncGetItem(r){return(r=>new Promise((t,n)=>{e.call("getItem",r,e=>{t(e||"")})}))(r)}setItem(r){return(r=>e.call("setItem",r))(r)}asyncSetItem(r){return(r=>new Promise((t,n)=>{e.call("setItem",r,e=>{t(e)})}))(r)}callPhone(r){return(r=>e.call("callPhone",r))(r)}asyncCallPhone(r){return(r=>new Promise((t,n)=>{e.call("callPhone",r,e=>{t(e)})}))(r)}getDeviceInfo(){return e.call("getDeviceInfo")||{}}asyncGetDeviceInfo(){return new Promise((r,t)=>{e.call("getDeviceInfo",e=>{r(e||{})})})}getDeviceToken(){return(()=>{let r=e.call("getDeviceToken");return r?JSON.parse(r).deviceToken:""})()}asyncGetDeviceToken(){return new Promise((r,t)=>{e.call("getDeviceToken",e=>{if(e){let t=JSON.parse(e);r(t?t.deviceToken:"")}else r("")})})}openFrame(r){return(r=>{let t=e.call("openFrame",r);return t?JSON.parse(t).message:""})(r)}asyncOpenFrame(r){return(r=>new Promise((t,n)=>{e.call("openFrame",r,e=>{t(e)})}))(r)}getParams(){return(()=>{let r=e.call("getParams");return r?JSON.parse(r):{}})()}asyncGetParams(){return new Promise((r,t)=>{e.call("getParams",e=>{if(e){let t=JSON.parse(e);r(t||{})}else r({})})})}closeView(){return e.call("closeView")}asyncCloseView(){return new Promise((r,t)=>{e.call("closeView",e=>{r(JSON.stringify({err:0,message:"关闭成功"}))})})}takePhoto(e){return(e=>"object"==typeof e?(e.type="camera",t(e)):r("camera"))(e)}getPhotos(e){return(e=>"object"==typeof e?(e.type="photo",t(e)):r("photo"))(e)}}
//# sourceMappingURL=index.modern.js.map
