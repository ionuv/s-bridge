interface Bridge{
  // call (handlerName: string, args?: any, responseCallback?: (retValue: any) => void): any;
  // call<T, R> (handlerName: string, args?: T, responseCallback?: (retValue: R) => void): R;

  // register (handlerName: string, handler: object | (() => any), async?: boolean): void;
  // register<F> (handlerName: string, handler: F, async?: boolean): void;

  // registerAsyn (handlerName: string, handler: object | (() => void)): void;
  // registerAsyn<F> (handlerName: string, handler: F): void;

  hasNativeMethod(funcName: string, type?: ('all' | 'asyn' | 'syn')): boolean;

  // 注册同步方法给原生调用
  register(name: string, fun: object | (() => any), asyn?: boolean): void;
  
  // js注册异步方法
  registerAsyn(name: string, fun: object | (() => void)): void;

  // 判断设备是否是真机 -1未知设备 0真机 1模拟器
  isMobile(): number;
  // 判断设备是否是真机 -1未知设备 0真机 1模拟器
  asyncIsMobile(): any;

  // 同步获取原生数据
  getItem(key: string): any;

  // 异步获取原生数据
  asyncGetItem(key: string): any;

  // 同步存储数据到原生
  setItem(obj: object): any;

  // 异步存储数据到原生
  asyncSetItem(obj: object): any;

  // 同步打电话
  callPhone(mobile: (string | number)): any; 

  // 异步打电话
  asyncCallPhone(mobile: (string | number)): any;

  // 获取设备信息
  getDeviceInfo(): any;

  // 异步获取设备信息
  asyncGetDeviceInfo(): any;

  // 获取推送的token
  getDeviceToken(): string;

  // 异步推送的token
  asyncGetDeviceToken(): any;

  // 打开新的web页
  openFrame(url: string): any;

  // 异步打开新的web页
  asyncOpenFrame(url: string): any; 

  // 获取页面注入的参数
  getParams(): object;

  // 异步获取页面注入的参数
  asyncGetParams(): any;

  // 关闭当前页面
  closeView(): any;

  // 异步关闭当前页面
  asyncCloseView(): any;

  // 调起拍照
  takePhoto(options?: object): any; 

  // 调起相册选择
  getPhotos(options?: object): any;
}

declare const Bridge: Bridge;

export default Bridge;
