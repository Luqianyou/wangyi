import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors{
  //请求拦截
  requestInterceptors?:(config: AxiosRequestConfig)=>AxiosRequestConfig;
  requestInterceptorsError?:(err:any)=>any;

  // 响应拦截
  responseInterceptors?:<T = AxiosResponse>(res:T)=>T;
  responseInterceptorsError?:(err:any)=>any;
}

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig{
  // 为它添加一个拦截器的属性判断
  interceptors?:RequestInterceptors;
}