!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("sbridge",[],e):"object"==typeof exports?exports.sbridge=e():t.sbridge=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=53)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(28)("wks"),o=n(18),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(4),o=n(34),i=n(22),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(16)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),o=n(17);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0),o=n(2),i=n(14),u=n(6),a=n(8),c=function(t,e,n){var f,s,l,d=t&c.F,p=t&c.G,v=t&c.S,h=t&c.P,y=t&c.B,g=t&c.W,m=p?o:o[e]||(o[e]={}),b=m.prototype,_=p?r:v?r[e]:(r[e]||{}).prototype;for(f in p&&(n=e),n)(s=!d&&_&&void 0!==_[f])&&a(m,f)||(l=s?_[f]:n[f],m[f]=p&&"function"!=typeof _[f]?n[f]:y&&s?i(l,r):g&&_[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[f]=l,t&c.R&&b&&!b[f]&&u(b,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(64),o=n(25);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(15);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(3).f,o=n(8),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){var n={default:this,call:function(t,e,n){var r="";"function"==typeof e&&(n=e,e={});var o={data:void 0===e?null:e};if("function"==typeof n){var i="dscb"+window.dscb++;window[i]=n,o._dscbstub=i}return o=JSON.stringify(o),window._dsbridge?r=_dsbridge.call(t,o):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(r=prompt("_dsbridge="+t,o)),JSON.parse(r||"{}").data},register:function(t,e,r){var o=r?window._dsaf:window._dsf;window._dsInit||(window._dsInit=!0,setTimeout((function(){n.call("_dsb.dsinit")}),0)),"object"==typeof e?o._obs[t]=e:o[t]=e},registerAsyn:function(t,e){this.register(t,e,!0)},hasNativeMethod:function(t,e){return this.call("_dsb.hasNativeMethod",{name:t,type:e||"all"})},disableJavascriptDialogBlock:function(t){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==t})}};!function(){if(!window._dsf){var t={_dsf:{_obs:{}},_dsaf:{_obs:{}},dscb:0,dsBridge:n,close:function(){n.call("_dsb.closePage")},_handleMessageFromNative:function(t){var e=JSON.parse(t.data),r={id:t.callbackId,complete:!0},o=this._dsf[t.method],i=this._dsaf[t.method],u=function(t,o){r.data=t.apply(o,e),n.call("_dsb.returnValue",r)},a=function(t,o){e.push((function(t,e){r.data=t,r.complete=!1!==e,n.call("_dsb.returnValue",r)})),t.apply(o,e)};if(o)u(o,this._dsf);else if(i)a(i,this._dsaf);else{var c=t.method.split(".");if(c.length<2)return;var f=c.pop(),s=c.join("."),l=this._dsf._obs,d=l[s]||{},p=d[f];if(p&&"function"==typeof p)return void u(p,d);if((p=(d=(l=this._dsaf._obs)[s]||{})[f])&&"function"==typeof p)return void a(p,d)}}};for(var e in t)window[e]=t[e];n.register("_hasJavascriptMethod",(function(t,e){var n=t.split(".");if(n.length<2)return!(!_dsf[n]&&!_dsaf[n]);t=n.pop();var r=n.join("."),o=_dsf._obs[r]||_dsaf._obs[r];return o&&!!o[t]}))}}(),t.exports=n},function(t,e,n){var r=n(7),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(40),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(28)("keys"),o=n(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(11)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";var r=n(15);function o(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},function(t,e,n){e.f=n(1)},function(t,e,n){var r=n(0),o=n(2),i=n(11),u=n(31),a=n(3).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports=!n(5)&&!n(16)((function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a}))},function(t,e){},function(t,e,n){"use strict";var r=n(61)(!0);n(37)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(11),o=n(9),i=n(38),u=n(6),a=n(12),c=n(62),f=n(19),s=n(67),l=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,h,y,g){c(n,e,v);var m,b,_,w=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",P="values"==h,S=!1,O=t.prototype,k=O[l]||O["@@iterator"]||h&&O[h],j=k||w(h),M=h?P?w("entries"):j:void 0,T="Array"==e&&O.entries||k;if(T&&(_=s(T.call(new t)))!==Object.prototype&&_.next&&(f(_,x,!0),r||"function"==typeof _[l]||u(_,l,p)),P&&k&&"values"!==k.name&&(S=!0,j=function(){return k.call(this)}),r&&!g||!d&&!S&&O[l]||u(O,l,j),a[e]=j,a[x]=p,h)if(m={values:P?j:w("values"),keys:y?j:w("keys"),entries:M},g)for(b in m)b in O||i(O,b,m[b]);else o(o.P+o.F*(d||S),e,m);return m}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(4),o=n(63),i=n(29),u=n(27)("IE_PROTO"),a=function(){},c=function(){var t,e=n(21)("iframe"),r=i.length;for(e.style.display="none",n(42).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(8),o=n(10),i=n(65)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(68);for(var r=n(0),o=n(6),i=n(12),u=n(1)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){var r=n(13),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(4),o=n(15),i=n(1)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||null==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(14),a=n(77),c=n(42),f=n(21),s=n(0),l=s.process,d=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,h=s.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},b=function(t){m.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++y]=function(){a("function"==typeof t?t:Function(t),e)},r(y),y},p=function(t){delete g[t]},"process"==n(13)(l)?r=function(t){l.nextTick(u(m,t,1))}:h&&h.now?r=function(t){h.now(u(m,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",b,!1)):r="onreadystatechange"in f("script")?function(t){c.appendChild(f("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:d,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(4),o=n(7),i=n(30);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(86)),o=u(n(88)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(40),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(n(54)),o=f(n(55)),i=f(n(59)),u=f(n(85)),a=f(n(98)),c=f(n(99));function f(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(){(0,r.default)(this,t)}return(0,o.default)(t,[{key:"hasNativeMethod",value:function(t,e){return i.default.hasNativeMethod(t,e)}},{key:"register",value:function(t,e,n){i.default.register(t,e,n)}},{key:"registerAsyn",value:function(t,e){return i.default.registerAsyn(t,e)}},{key:"mobileType",value:function(){return i.default.mobileType()}},{key:"asyncMobileType",value:function(){return i.default.asyncMobileType()}},{key:"getItem",value:function(t){return i.default.getItem(t)}},{key:"asyncGetItem",value:function(t){return i.default.asyncGetItem(t)}},{key:"setItem",value:function(t,e){return i.default.setItem(t,e)}},{key:"asyncSetItem",value:function(t,e){return i.default.asyncSetItem(t,e)}},{key:"callPhone",value:function(t){return i.default.callPhone(t)}},{key:"asyncCallPhone",value:function(t){return i.default.asyncCallPhone(t)}},{key:"getDeviceInfo",value:function(){return i.default.getDeviceInfo()}},{key:"asyncGetDeviceInfo",value:function(){return i.default.asyncGetDeviceInfo()}},{key:"getDeviceToken",value:function(){return i.default.getDeviceToken()}},{key:"asyncGetDeviceToken",value:function(){return i.default.asyncGetDeviceToken()}},{key:"openFrame",value:function(t){return i.default.openFrame(t)}},{key:"asyncOpenFrame",value:function(t){return i.default.asyncOpenFrame(t)}},{key:"getParams",value:function(){return i.default.getParams()}},{key:"asyncGetParams",value:function(){return i.default.asyncGetParams()}},{key:"closeView",value:function(){return i.default.closeView()}},{key:"asyncCloseView",value:function(){return i.default.asyncCloseView()}},{key:"getStatusHeight",value:function(){return i.default.getStatusHeight()}},{key:"asyncGetStatusHeight",value:function(){return i.default.asyncGetStatusHeight()}},{key:"getWebInfo",value:function(){return i.default.getWebInfo()}},{key:"asyncGetWebInfo",value:function(){return i.default.asyncGetWebInfo()}},{key:"asyncGetWebAppUpdate",value:function(t){return i.default.asyncGetWebAppUpdate(t)}},{key:"takePhoto",value:function(t){return i.default.hasNativeMethod("takePhoto")?i.default.takePhoto(t):u.default.takePhoto(t)}},{key:"getPhotos",value:function(t){return i.default.hasNativeMethod("getPhotos")?i.default.getPhotos(t):u.default.getPhotos(t)}},{key:"startSpeech",value:function(t){return a.default.startSpeech(t)}},{key:"stopSpeech",value:function(){return a.default.stopSpeech()}},{key:"asyncQrCodeIdentification",value:function(){return i.default.asyncQrCodeIdentification()}},{key:"newToOriginModule",value:function(t,e,n){return c.default.newToOriginModule(t,e,n)}},{key:"originToNewModule",value:function(t,e,n){return c.default.originToNewModule(t,e,n)}},{key:"cleanCache",value:function(t){return i.default.cleanCache(t)}},{key:"asyncCleanCache",value:function(t){return i.default.asyncCleanCache(t)}},{key:"accessNative",value:function(t,e){return i.default.accessNative(t,e)}},{key:"asyncAccessNative",value:function(t,e){return i.default.asyncAccessNative(t,e)}},{key:"jumpFrame",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"push",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];return i.default.jumpFrame(t,e,n,r,o,u)}},{key:"asyncJumpFrame",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"push",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],u=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];return i.default.asyncJumpFrame(t,e,n,r,o,u)}},{key:"asyncLocation",value:function(t,e){return i.default.asyncLocation(t,e)}}]),t}();e.default=new s},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(56),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(57),__esModule:!0}},function(t,e,n){n(58);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(9);r(r.S+r.F*!n(5),"Object",{defineProperty:n(3).f})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(23)),o=i(n(20));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){return t?"string"==typeof t?JSON.parse(t)||{}:t:{}}var a={hasNativeMethod:function(t,e){return o.default.hasNativeMethod(t,e)},register:function(t,e,n){o.default.register(t,e,n)},registerAsyn:function(t,e){o.default.registerAsyn(t,e)},mobileType:function(){return(u(o.default.call("mobileType")).data||{}).mobileType||"other"},asyncMobileType:function(){return new r.default((function(t,e){o.default.call("mobileType",(function(e){var n=u(e).data||{};t(n.mobileType||"other")}))}))},getItem:function(t){return(u(o.default.call("getItem",t)).data||{})[t]||""},asyncGetItem:function(t){return new r.default((function(e,n){o.default.call("getItem",t,(function(n){var r=u(n).data||{};e(r[t]||"")}))}))},setItem:function(t,e){var n={};return n[t]=e,u(o.default.call("setItem",n))},asyncSetItem:function(t,e){return new r.default((function(n,r){var i={};i[t]=e,o.default.call("setItem",i,(function(t){n(u(t))}))}))},callPhone:function(t){return u(o.default.call("callPhone",t))},asyncCallPhone:function(t){return new r.default((function(e,n){o.default.call("callPhone",t,(function(t){e(u(t))}))}))},getDeviceInfo:function(){return u(o.default.call("getDeviceInfo")).data||{}},asyncGetDeviceInfo:function(){return new r.default((function(t,e){o.default.call("getDeviceInfo",(function(e){var n=u(e).data||{};t(n)}))}))},getDeviceToken:function(){return(u(o.default.call("getDeviceToken")).data||{}).deviceToken||""},asyncGetDeviceToken:function(){return new r.default((function(t,e){o.default.call("getDeviceToken",(function(e){var n=u(e).data||{};t(n.deviceToken||"")}))}))},openFrame:function(t){return u(o.default.call("openFrame",t))},asyncOpenFrame:function(t){return new r.default((function(e,n){o.default.call("openFrame",t,(function(t){e(u(t))}))}))},getParams:function(){return u(o.default.call("getParams")).data||{}},asyncGetParams:function(){return new r.default((function(t,e){o.default.call("getParams",(function(e){var n=u(e).data||{};t(n)}))}))},closeView:function(){return u(o.default.call("closeView"))},asyncCloseView:function(){return new r.default((function(t,e){o.default.call("closeView",(function(e){t(u(e))}))}))},getStatusHeight:function(){return u(o.default.call("getStatusHeight")).data||{}},asyncGetStatusHeight:function(){return new r.default((function(t,e){o.default.call("getStatusHeight",(function(e){var n=u(e).data||{};t(n)}))}))},getWebInfo:function(){return u(o.default.call("getWebInfo")).data||{}},asyncGetWebInfo:function(){return new r.default((function(t,e){o.default.call("getWebInfo",(function(e){var n=u(e).data||{};t(n)}))}))},asyncGetWebAppUpdate:function(t){return new r.default((function(e,n){o.default.call("getWebAppUpdate",t,(function(t){e(u(t))}))}))},takePhoto:function(t){return new r.default((function(e,n){o.default.call("takePhoto",t,(function(t){e(u(t))}))}))},getPhotos:function(t){return new r.default((function(e,n){o.default.call("getPhotos",t,(function(t){e(u(t))}))}))},asyncQrCodeIdentification:function(){return new r.default((function(t,e){o.default.call("recognitionCode",(function(e){t(u(e))}))}))},cleanCache:function(t){return u(o.default.call("cleanCache",t)).data||{}},asyncCleanCache:function(t){return new r.default((function(e,n){o.default.call("cleanCache",t,(function(t){var n=u(t).data||{};e(n)}))}))},accessNative:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.default.call("accessNative",{name:t,userInfo:e}),r=u(n)||{};return r},asyncAccessNative:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={name:t,userInfo:e};return new r.default((function(t,e){o.default.call("accessNative",n,(function(e){var n=u(e)||{};t(n)}))}))},jumpFrame:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"push",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],c={url:encodeURI(decodeURI(t)),isHiddenNavigate:i,isHiddenTabbar:a,title:r,direction:n,params:e},f=o.default.call("jumpFrame",c),s=u(f)||{};return s},asyncJumpFrame:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"push",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],f={url:t,isHiddenNavigate:a,isHiddenTabbar:c,title:i,direction:n,params:e};return new r.default((function(t,e){o.default.call("jumpFrame",f,(function(e){var n=u(e)||{};t(n)}))}))},asyncLocation:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"地图定位",n={showMap:t,title:e};return new r.default((function(t,e){o.default.call("location",n,(function(e){var n=u(e)||{};t(n)}))}))}};e.default=a},function(t,e,n){n(35),n(36),n(44),n(71),n(83),n(84),t.exports=n(2).Promise},function(t,e,n){var r=n(24),o=n(25);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(39),o=n(17),i=n(19),u={};n(6)(u,n(1)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(4),i=n(26);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(10),o=n(41),i=n(66);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(8),o=n(43),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(69),o=n(70),i=n(12),u=n(10);t.exports=n(37)(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,u,a=n(11),c=n(0),f=n(14),s=n(45),l=n(9),d=n(7),p=n(15),v=n(72),h=n(73),y=n(46),g=n(47).set,m=n(78)(),b=n(30),_=n(48),w=n(79),x=n(49),P=c.TypeError,S=c.process,O=S&&S.versions,k=O&&O.v8||"",j=c.Promise,M="process"==s(S),T=function(){},I=o=b.f,N=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(T,T)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==k.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;m((function(){for(var r=t._v,o=1==t._s,i=0,u=function(e){var n,i,u,a=o?e.ok:e.fail,c=e.resolve,f=e.reject,s=e.domain;try{a?(o||(2==t._h&&L(t),t._h=1),!0===a?n=r:(s&&s.enter(),n=a(r),s&&(s.exit(),u=!0)),n===e.promise?f(P("Promise-chain cycle")):(i=C(n))?i.call(n,c,f):c(n)):f(r)}catch(t){s&&!u&&s.exit(),f(t)}};n.length>i;)u(n[i++]);t._c=[],t._n=!1,e&&!t._h&&F(t)}))}},F=function(t){g.call(c,(function(){var e,n,r,o=t._v,i=E(t);if(i&&(e=_((function(){M?S.emit("unhandledRejection",o,t):(n=c.onunhandledrejection)?n({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=M||E(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},E=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){g.call(c,(function(){var e;M?S.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},G=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},D=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw P("Promise can't be resolved itself");(e=C(t))?m((function(){var r={_w:n,_d:!1};try{e.call(t,f(D,r,1),f(G,r,1))}catch(t){G.call(r,t)}})):(n._v=t,n._s=1,A(n,!1))}catch(t){G.call({_w:n,_d:!1},t)}}};N||(j=function(t){v(this,j,"Promise","_h"),p(t),r.call(this);try{t(f(D,this,1),f(G,this,1))}catch(t){G.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(80)(j.prototype,{then:function(t,e){var n=I(y(this,j));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?S.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(D,t,1),this.reject=f(G,t,1)},b.f=I=function(t){return t===j||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!N,{Promise:j}),n(19)(j,"Promise"),n(81)("Promise"),u=n(2).Promise,l(l.S+l.F*!N,"Promise",{reject:function(t){var e=I(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(a||!N),"Promise",{resolve:function(t){return x(a&&this===u?j:this,t)}}),l(l.S+l.F*!(N&&n(82)((function(t){j.all(t).catch(T)}))),"Promise",{all:function(t){var e=this,n=I(e),r=n.resolve,o=n.reject,i=_((function(){var n=[],i=0,u=1;h(t,!1,(function(t){var a=i++,c=!1;n.push(void 0),u++,e.resolve(t).then((function(t){c||(c=!0,n[a]=t,--u||r(n))}),o)})),--u||r(n)}));return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=I(e),r=n.reject,o=_((function(){h(t,!1,(function(t){e.resolve(t).then(n.resolve,r)}))}));return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(14),o=n(74),i=n(75),u=n(4),a=n(41),c=n(76),f={},s={};(e=t.exports=function(t,e,n,l,d){var p,v,h,y,g=d?function(){return t}:c(t),m=r(n,l,e?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=a(t.length);p>b;b++)if((y=e?m(u(v=t[b])[0],v[1]):m(t[b]))===f||y===s)return y}else for(h=g.call(t);!(v=h.next()).done;)if((y=o(h,m,v.value,e))===f||y===s)return y}).BREAK=f,e.RETURN=s},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(12),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(45),o=n(1)("iterator"),i=n(12);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(47).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,c="process"==n(13)(u);t.exports=function(){var t,e,n,f=function(){var r,o;for(c&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){u.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var s=a.resolve(void 0);n=function(){s.then(f)}}else n=function(){o.call(r,f)};else{var l=!0,d=document.createTextNode("");new i(f).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(6);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(3),u=n(5),a=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(9),o=n(2),i=n(0),u=n(46),a=n(49);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then((function(){return n}))}:t,n?function(n){return a(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){"use strict";var r=n(9),o=n(30),i=n(48);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(23)),o=u(n(50)),i=u(n(20));function u(t){return t&&t.__esModule?t:{default:t}}var a=function(t){return new r.default((function(e,n){i.default.call("b.photos",t,(function(t){e(t)}))}))},c=function(t){return new r.default((function(e,n){i.default.call("b.photoswithOptions",t,(function(t){e(t)}))}))},f={takePhoto:function(t){return"object"===(void 0===t?"undefined":(0,o.default)(t))?(t.type="camera",c(t)):a("camera")},getPhotos:function(t){return"object"===(void 0===t?"undefined":(0,o.default)(t))?(t.type="photo",c(t)):a("photo")}};e.default=f},function(t,e,n){t.exports={default:n(87),__esModule:!0}},function(t,e,n){n(36),n(44),t.exports=n(31).f("iterator")},function(t,e,n){t.exports={default:n(89),__esModule:!0}},function(t,e,n){n(90),n(35),n(96),n(97),t.exports=n(2).Symbol},function(t,e,n){"use strict";var r=n(0),o=n(8),i=n(5),u=n(9),a=n(38),c=n(91).KEY,f=n(16),s=n(28),l=n(19),d=n(18),p=n(1),v=n(31),h=n(32),y=n(92),g=n(93),m=n(4),b=n(7),_=n(43),w=n(10),x=n(22),P=n(17),S=n(39),O=n(94),k=n(95),j=n(51),M=n(3),T=n(26),I=k.f,N=M.f,C=O.f,A=r.Symbol,F=r.JSON,E=F&&F.stringify,L=p("_hidden"),G=p("toPrimitive"),D={}.propertyIsEnumerable,W=s("symbol-registry"),R=s("symbols"),H=s("op-symbols"),J=Object.prototype,V="function"==typeof A&&!!j.f,U=r.QObject,B=!U||!U.prototype||!U.prototype.findChild,z=i&&f((function(){return 7!=S(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=I(J,e);r&&delete J[e],N(t,e,n),r&&t!==J&&N(J,e,r)}:N,K=function(t){var e=R[t]=S(A.prototype);return e._k=t,e},Q=V&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Y=function(t,e,n){return t===J&&Y(H,e,n),m(t),e=x(e,!0),m(n),o(R,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=S(n,{enumerable:P(0,!1)})):(o(t,L)||N(t,L,P(1,{})),t[L][e]=!0),z(t,e,n)):N(t,e,n)},q=function(t,e){m(t);for(var n,r=y(e=w(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},X=function(t){var e=D.call(this,t=x(t,!0));return!(this===J&&o(R,t)&&!o(H,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=w(t),e=x(e,!0),t!==J||!o(R,e)||o(H,e)){var n=I(t,e);return!n||!o(R,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=C(w(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==L||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===J,r=C(n?H:w(t)),i=[],u=0;r.length>u;)!o(R,e=r[u++])||n&&!o(J,e)||i.push(R[e]);return i};V||(a((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(H,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),z(this,t,P(1,n))};return i&&B&&z(J,t,{configurable:!0,set:e}),K(t)}).prototype,"toString",(function(){return this._k})),k.f=Z,M.f=Y,n(52).f=O.f=$,n(33).f=X,j.f=tt,i&&!n(11)&&a(J,"propertyIsEnumerable",X,!0),v.f=function(t){return K(p(t))}),u(u.G+u.W+u.F*!V,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=T(p.store),ot=0;rt.length>ot;)h(rt[ot++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=A(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,e){return void 0===e?S(t):q(S(t),e)},defineProperty:Y,defineProperties:q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f((function(){j.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return j.f(_(t))}}),F&&u(u.S+u.F*(!V||f((function(){var t=A();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!Q(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,E.apply(F,r)}}),A.prototype[G]||n(6)(A.prototype,G,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(18)("meta"),o=n(7),i=n(8),u=n(3).f,a=0,c=Object.isExtensible||function(){return!0},f=!n(16)((function(){return c(Object.preventExtensions({}))})),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){var r=n(26),o=n(51),i=n(33);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},function(t,e,n){var r=n(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(10),o=n(52).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(33),o=n(17),i=n(10),u=n(22),a=n(8),c=n(34),f=Object.getOwnPropertyDescriptor;e.f=n(5)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){n(32)("asyncIterator")},function(t,e,n){n(32)("observable")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(n(23)),o=i(n(20));function i(t){return t&&t.__esModule?t:{default:t}}var u={startSpeech:function(t){return new r.default((function(e,n){o.default.call("c.startRecognize",t,(function(t){e(t)}))}))},stopSpeech:function(){return new r.default((function(t,e){o.default.call("c.stopRecognize","",(function(e){t(e)}))}))}};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(100)),o=u(n(50)),i=u(n(20));function u(t){return t&&t.__esModule?t:{default:t}}var a={newToOriginModule:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push",n=arguments[2],r={pageName:t,direction:e};if("string"==typeof n){if(!/\&[\w\W]*=[\w\W]*/.test(n))return console.warn("otherParams类型与要求不符"),!1;var u=n.split("&");for(var a in u){var c=u[a];if(c){var f=c.split("=");r.otherParams[f[0]]=f[1]}}}if("object"===(void 0===n?"undefined":(0,o.default)(n))){var s="";for(var l in n)s="&"+l+"="+n[l];r.otherParams=s}return i.default.call("origin.newToOriginModule",r)},originToNewModule:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push",n=arguments[2];if("object"!==(void 0===n?"undefined":(0,o.default)(n)))return console.warn("otherParams必须为对象"),!1;var i=navigator.userAgent,u=i.indexOf("Android")>-1||i.indexOf("Adr")>-1,a=!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(a&&plus){var c={url:t,direction:e,otherParams:n},f=plus.ios.importClass("NSNotificationCenter");f.defaultCenter().postNotificationNameobject("originToNewModule",(0,r.default)(c))}u&&android&&window.android.originToNewModule(t,e,(0,r.default)(n))}};e.default=a},function(t,e,n){t.exports={default:n(101),__esModule:!0}},function(t,e,n){var r=n(2),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}}]).default}));