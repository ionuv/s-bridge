interface Bridge {
    constructor(props: any);
    /**
     * 判断原生是否有该方法
     * funcName: 需要判断的方法名,可以包含命名空间
     * type: 可选参数，["all"|"syn"|"asyn" ], 默认是 "all".
    */
    hasNativeMethod(funcName: any, type: any): any;
    /******** js不支持重载 所以不支持同名的同异步方法的注册*******/
    register(name: any, fun: any, asyn: any): void;
    registerAsyn(name: any, fun: any): any;
    isMobile(): any;
    asyncIsMobile(): any;
    getItem(key: any): any;
    asyncGetItem(key: any): any;
    setItem(obj: any): any;
    asyncSetItem(obj: any): any;
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
    takePhoto(options: any): any;
    getPhotos(options: any): any;
}

declare const Bridge: Bridge;

export default Bridge;
