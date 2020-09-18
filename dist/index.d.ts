declare class sbridge {
    hasNativeMethod(funcName: string, type?: ('all' | 'asyn' | 'syn')): boolean;
    register(name: string, fun: object | (() => any), asyn?: boolean): void;
    registerAsyn(name: string, fun: object | (() => void)): any;
    isMobile(): number;
    asyncIsMobile(): any;
    getItem(key: string): any;
    asyncGetItem(key: string): any;
    setItem(obj: object): any;
    asyncSetItem(obj: object): any;
    callPhone(mobile: (string | number)): any;
    asyncCallPhone(mobile: (string | number)): any;
    getDeviceInfo(): any;
    asyncGetDeviceInfo(): any;
    getDeviceToken(): string;
    asyncGetDeviceToken(): any;
    openFrame(url: string): any;
    asyncOpenFrame(url: string): any;
    getParams(): object;
    asyncGetParams(): any;
    closeView(): any;
    asyncCloseView(): any;
    takePhoto(options?: object): any;
    getPhotos(options?: object): any;
}
export default sbridge;
