'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dsBridge = require('dsbridge');

// 拍照
var takePhoto = function takePhoto(options) {
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    options['type'] = 'camera';
    return photoswithOptions(options);
  } else {
    return photos('camera');
  }
};

// 打开相册获取图片
var getPhotos = function getPhotos(options) {
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    options['type'] = 'photo';
    return photoswithOptions(options);
  } else {
    return photos('photo');
  }
};

// 默认参数调起相机或者相册
var photos = function photos(type) {
  return new Promise(function (resolve, reject) {
    dsBridge.call('b.photos', type, function (res) {
      resolve(res);
    });
  });
};

var photoswithOptions = function photoswithOptions(options) {
  return new Promise(function (resolve, reject) {
    dsBridge.call('b.photoswithOptions', options, function (res) {
      resolve(res);
    });
  });
};

var photo = {
  takePhoto: takePhoto,
  getPhotos: getPhotos
};

module.exports = photo;