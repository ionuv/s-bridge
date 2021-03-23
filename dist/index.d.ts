declare class Bridge {
    /**
     * 判断原生是否有该方法
     * funcName: 需要判断的方法名,可以包含命名空间
     * type: 可选参数，["all"|"syn"|"asyn" ], 默认是 "all".
    */
    hasNativeMethod(funcName: any, type: any): any;
    /******** js不支持重载 所以不支持同名的同异步方法的注册*******/
    register(name: any, fun: any, asyn: any): void;
    registerAsyn(name: any, fun: any): any;
    mobileType(): any;
    asyncMobileType(): any;
    getItem(key: any): any;
    asyncGetItem(key: any): any;
    setItem(key: any, obj: any): any;
    asyncSetItem(key: any, obj: any): any;
    callPhone(mobile: any): any;
    asyncCallPhone(mobile: any): any;
    getDeviceInfo(): any;
    asyncGetDeviceInfo(): any;
    getDeviceToken(): any;
    asyncGetDeviceToken(): any;
    openFrame(url: any): any;
    asyncOpenFrame(url: any): any;
    getParams(): any;
    asyncGetParams(): any;
    closeView(): any;
    asyncCloseView(): any;
    getStatusHeight(): any;
    asyncGetStatusHeight(): any;
    getWebInfo(): any;
    asyncGetWebInfo(): any;
    asyncGetWebAppUpdate(obj: any): any;
    takePhoto(options: any): any;
    getPhotos(options: any): any;
    startSpeech(options: any): any;
    stopSpeech(): any;
    asyncQrCodeIdentification(): any;
    newToOriginModule(pageName: any, direction: any, otherParams: any): any;
    originToNewModule(url: any, direction: any, otherParams: any): any;
    cleanCache(key: any): any;
    accessNative(name: any, userInfo: any): any;
    asyncAccessNative(name: any, userInfo: any): any;
}
declare const _default: Bridge;
export default _default;
