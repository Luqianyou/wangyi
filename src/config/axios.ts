import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance,AxiosResponse } from 'axios';
import { RequestConfig,RequestInterceptors } from './type';

class Request{
  instance: AxiosInstance;
  interceptorsObj?:RequestInterceptors;
  constructor(config: RequestConfig){
    this.instance = axios.create(config);
    // 全局请求拦截器
    this.instance.interceptors.request.use((res:AxiosRequestConfig)=>{
      return res;
    },(err:any)=>{
      return Promise.reject(err);
    }
    )
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsError
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsError
    )
    // 全局响应拦截器
    this.instance.interceptors.response.use((res:AxiosResponse)=>{
      return res.data;
    },(err:any)=>{
      return Promise.reject(err);
    }
    )
  }
  request<T>(config: RequestConfig):Promise<T>{
    return new Promise((resolve,reject)=>{
      if(config.interceptors?.requestInterceptors){
        config = config.interceptors.requestInterceptors(config);
      }
      this.instance
      .request<any,T>(config)
      .then(res=>{
        if(config.interceptors?.responseInterceptors){
          res = config.interceptors.responseInterceptors<T>(res);
        }
        resolve(res);
      }).catch((err:any)=>{
        reject(err)
      })
    })
  }
}

export default Request