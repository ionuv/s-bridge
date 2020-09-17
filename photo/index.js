'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dsBridge = require('dsbridge');

// 通用回调
var backBlock = require('../common/index');

// 拍照
var takePhoto = function takePhoto(options) {
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    options['type'] = 'camera';
    photoswithOptions(options);
  } else {
    photos('camera');
  }
};

// 打开相册获取图片
var getPhotos = function getPhotos(options) {
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    options['type'] = 'photo';
    photoswithOptions(options);
  } else {
    photos('photo');
  }
};

// 默认参数调起相机或者相册
var photos = function photos(type) {
  dsBridge.call('b.photos', type, function (res) {
    backBlock(res);
  });
};

var photoswithOptions = function photoswithOptions(options) {
  dsBridge.call('b.photoswithOptions', options, function (res) {
    backBlock(res);
  });
};

var photo = {
  takePhoto: takePhoto,
  getPhotos: getPhotos
};

module.exports = photo;