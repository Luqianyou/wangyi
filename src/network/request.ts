import Request from '../config/axios'

import type { RequestConfig } from '../config/type'
interface YWZRequestConfig<T> extends RequestConfig {
  data?: T
}

interface YWZResponse<T> {
  [x: string]: any
  code: number
  data?: T
}

const request = new Request({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true,
  interceptors: {
    requestInterceptors: (res: any) => {
      return res
    },
    responseInterceptors: (res: any) => {
      return res
    },
  },
})

const ywzRequest = <D, T = any>(config: YWZRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<YWZResponse<T>>(config)
}

export default ywzRequest
