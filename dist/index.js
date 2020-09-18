"use strict";
exports.__esModule = true;
var index_1 = require("./api/index");
var index_2 = require("./photo/index");
var index_3 = require("./speech/index");
var Bridge = /** @class */ (function () {
    function Bridge() {
    }
    /**
     * 判断原生是否有该方法
     * funcName: 需要判断的方法名,可以包含命名空间
     * type: 可选参数，["all"|"syn"|"asyn" ], 默认是 "all".
    */
    Bridge.prototype.hasNativeMethod = function (funcName, type) {
        return index_1["default"].hasNativeMethod(funcName, type);
    };
    /******** js不支持重载 所以不支持同名的同异步方法的注册*******/
    // 注册同步方法给原生调用
    Bridge.prototype.register = function (name, fun, asyn) {
        index_1["default"].register(name, fun, asyn);
    };
    // js注册异步方法
    Bridge.prototype.registerAsyn = function (name, fun) {
        return index_1["default"].registerAsyn(name, fun);
    };
    // 判断设备是否是真机 -1未知设备 0真机 1模拟器
    Bridge.prototype.isMobile = function () {
        return index_1["default"].isMobile();
    };
    // 判断设备是否是真机 -1未知设备 0真机 1模拟器
    Bridge.prototype.asyncIsMobile = function () {
        return index_1["default"].asyncIsMobile();
    };
    // 同步获取原生数据
    Bridge.prototype.getItem = function (key) {
        return index_1["default"].getItem(key);
    };
    // 异步获取原生数据
    Bridge.prototype.asyncGetItem = function (key) {
        return index_1["default"].asyncGetItem(key);
    };
    // 同步存储数据到原生
    Bridge.prototype.setItem = function (obj) {
        return index_1["default"].setItem(obj);
    };
    // 异步存储数据到原生
    Bridge.prototype.asyncSetItem = function (obj) {
        return index_1["default"].asyncSetItem(obj);
    };
    // 同步打电话
    Bridge.prototype.callPhone = function (mobile) {
        return index_1["default"].callPhone(mobile);
    };
    // 异步打电话
    Bridge.prototype.asyncCallPhone = function (mobile) {
        return index_1["default"].asyncCallPhone(mobile);
    };
    // 获取设备信息
    Bridge.prototype.getDeviceInfo = function () {
        return index_1["default"].getDeviceInfo();
    };
    // 异步获取设备信息
    Bridge.prototype.asyncGetDeviceInfo = function () {
        return index_1["default"].asyncGetDeviceInfo();
    };
    // 获取推送的token
    Bridge.prototype.getDeviceToken = function () {
        return index_1["default"].getDeviceToken();
    };
    // 异步推送的token
    Bridge.prototype.asyncGetDeviceToken = function () {
        return index_1["default"].asyncGetDeviceToken();
    };
    // 打开新的web页
    Bridge.prototype.openFrame = function (url) {
        return index_1["default"].openFrame(url);
    };
    // 异步打开新的web页
    Bridge.prototype.asyncOpenFrame = function (url) {
        return index_1["default"].asyncOpenFrame(url);
    };
    // 获取页面注入的参数
    Bridge.prototype.getParams = function () {
        return index_1["default"].getParams();
    };
    // 异步获取页面注入的参数
    Bridge.prototype.asyncGetParams = function () {
        return index_1["default"].asyncGetParams();
    };
    // 关闭当前页面
    Bridge.prototype.closeView = function () {
        return index_1["default"].closeView();
    };
    // 异步关闭当前页面
    Bridge.prototype.asyncCloseView = function () {
        return index_1["default"].asyncCloseView();
    };
    // 调起拍照
    Bridge.prototype.takePhoto = function (options) {
        return index_2["default"].takePhoto(options);
    };
    // 调起相册选择
    Bridge.prototype.getPhotos = function (options) {
        return index_2["default"].getPhotos(options);
    };
    // 开始语音识别
    Bridge.prototype.startSpeech = function (options) {
        return index_3["default"].startSpeech(options);
    };
    // 停止语音识别
    Bridge.prototype.stopSpeech = function () {
        return index_3["default"].stopSpeech();
    };
    return Bridge;
}());
exports["default"] = Bridge;
