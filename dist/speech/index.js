'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dsbridge = require('dsbridge');

var _dsbridge2 = _interopRequireDefault(_dsbridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 开始语音识别
var startSpeech = function startSpeech(options) {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('c.startRecognize', options, function (res) {
      resolve(res);
    });
  });
};

// 打开相册获取图片
var stopSpeech = function stopSpeech() {
  return new Promise(function (resolve, reject) {
    _dsbridge2.default.call('c.stopRecognize', '', function (res) {
      resolve(res);
    });
  });
};

var speech = {
  startSpeech: startSpeech,
  stopSpeech: stopSpeech
};

exports.default = speech;