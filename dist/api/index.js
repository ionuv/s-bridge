'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dsbridge = require('dsbridge');

var _dsbridge2 = _interopRequireDefault(_dsbridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 检测原生是否存在该方法
var hasNativeMethod = function hasNativeMethod(funcName, type) {
  return _dsbridge2.default.hasNativeMethod(funcName, type);
};

// js注册同步方法
var register = function register(name, fun, asyn) {
  _dsbridge2.default.register(name, fun, asyn);
};

// js注册异步方法
var registerAsyn = function registerAsyn(name, fun) {
  _dsbridge2.default.registerAsyn(name, fun);
};

// 判断设备是否是真机 -1未知设备 0真机 1模拟器
var isMobile = function isMobile() {
  var res = _dsbridge2.default.call('isMobile');
  if (res) {
    var response = JSON.parse(res);
    return response.err;
  } else {
    return -1;
  }
};

var asyncIsMobile = function asyncIsMobile() {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('isMobile', function (res) {
      if (res) {
        var response = JSON.parse(res);
        // return Promise.resolve(response.err)
        resolve(response.err);
      } else {
        // return Promise.resolve(-1)
        resolve(-1);
      }
    });
  });
};

// 同步获取原生数据
var getItem = function getItem(key) {
  var res = _dsbridge2.default.call('getItem', key);
  if (res) {
    var response = JSON.parse(res);
    return response.message;
  } else {
    return '';
  }
};

// 异步获取原生数据
var asyncGetItem = function asyncGetItem(key) {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('getItem', key, function (res) {
      if (res) {
        resolve(res);
      } else {
        resolve('');
      }
    });
  });
};

// 同步存储数据到原生
var setItem = function setItem(obj) {
  return _dsbridge2.default.call('setItem', obj);
};

// 异步存储数据到原生
var asyncSetItem = function asyncSetItem(obj) {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('setItem', obj, function (res) {
      resolve(res);
    });
  });
};

// 同步打电话
var callPhone = function callPhone(mobile) {
  return _dsbridge2.default.call('callPhone', mobile);
};

// 异步打电话
var asyncCallPhone = function asyncCallPhone(mobile) {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('callPhone', mobile, function (res) {
      resolve(res);
    });
  });
};

// 获取设备信息
var getDeviceInfo = function getDeviceInfo() {
  var res = _dsbridge2.default.call('getDeviceInfo');
  if (res) {
    return res;
  } else {
    return {};
  }
};

// 异步获取设备信息
var asyncGetDeviceInfo = function asyncGetDeviceInfo() {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('getDeviceInfo', function (res) {
      if (res) {
        resolve(res);
      } else {
        resolve({});
      }
    });
  });
};

// 获取推送的token
var getDeviceToken = function getDeviceToken() {
  var res = _dsbridge2.default.call('getDeviceToken');
  if (res) {
    var response = JSON.parse(res);
    return response.deviceToken;
  } else {
    return '';
  }
};

// 异步推送的token
var asyncGetDeviceToken = function asyncGetDeviceToken() {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('getDeviceToken', function (res) {
      if (res) {
        var response = JSON.parse(res);
        if (response) {
          resolve(response.deviceToken);
        } else {
          resolve('');
        }
      } else {
        resolve('');
      }
    });
  });
};

// 打开新的web页
var openFrame = function openFrame(url) {
  var res = _dsbridge2.default.call('openFrame', url);
  if (res) {
    var response = JSON.parse(res);
    return response.message;
  } else {
    return '';
  }
};

// 异步打开新的web页
var asyncOpenFrame = function asyncOpenFrame(url) {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('openFrame', url, function (res) {
      resolve(res);
    });
  });
};

// 获取页面注入的参数
var getParams = function getParams() {
  var res = _dsbridge2.default.call('getParams');
  if (res) {
    var response = JSON.parse(res);
    return response;
  } else {
    return {};
  }
};

// 异步获取页面注入的参数
var asyncGetParams = function asyncGetParams() {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('getParams', function (res) {
      if (res) {
        var response = JSON.parse(res);
        if (response) {
          resolve(response);
        } else {
          resolve({});
        }
      } else {
        resolve({});
      }
    });
  });
};

// 关闭当前页面
var closeView = function closeView() {
  return _dsbridge2.default.call('closeView');
};

// 异步关闭当前页面
var asyncCloseView = function asyncCloseView() {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('closeView', function (res) {
      resolve(JSON.stringify({ err: 0, message: '关闭成功' }));
    });
  });
};

var bridge = {
  hasNativeMethod: hasNativeMethod,
  register: register,
  registerAsyn: registerAsyn,
  isMobile: isMobile,
  asyncIsMobile: asyncIsMobile,
  getItem: getItem,
  asyncGetItem: asyncGetItem,
  setItem: setItem,
  asyncSetItem: asyncSetItem,
  callPhone: callPhone,
  asyncCallPhone: asyncCallPhone,
  getDeviceInfo: getDeviceInfo,
  asyncGetDeviceInfo: asyncGetDeviceInfo,
  getDeviceToken: getDeviceToken,
  asyncGetDeviceToken: asyncGetDeviceToken,
  openFrame: openFrame,
  asyncOpenFrame: asyncOpenFrame,
  getParams: getParams,
  asyncGetParams: asyncGetParams,
  closeView: closeView,
  asyncCloseView: asyncCloseView
};

exports.default = bridge;