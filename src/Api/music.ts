import request from '../network/request'
import { LogError} from '../utils/LogError'

interface loginTime{
  timerstamp:number
}

interface loginKey{
  key:string,
  qrimg?:boolean
}

interface getSongDetailByIdReq {
  id: number
}
interface Res {
  data?: any
  code?: number
  unikey?: string
  qrimg?: string
}

class MusicApi{

  static async getLoginKey(data:loginTime){
   let res = await request<loginTime,Res>({
      url: '/login/qr/key',
      method: 'get',
      data,
      withCredentials: true,
   })
   return res
  }

  static async getLoginQr(data:loginTime & loginKey){
    let res = await request<loginTime & loginKey,Res>({
      url: '/login/qr/create',
      method: 'get',
      data,
      withCredentials: true,
    })
    return res
  }

  static async checkLoginStatus(data:loginTime & loginKey){
    let res = await request<loginTime & loginKey,Res>({
      url: '/login/qr/check',
      method: 'get',
      data,
      withCredentials: true,
    })
    return res
  }

  static async getLoginStatus(data:loginTime){
    let res = await request<loginTime,Res>({
      url: '/login/status',
      method: 'get',
      data,
      withCredentials: true,
    })
    return res
  }

  static async getSongDetailById(data: getSongDetailByIdReq){
    try {
      let res = await request<getSongDetailByIdReq, Res>({
        url: '/song/url',
        method: 'get',
        data,
      })
      if (res.code === 200) {
        return res.data
      } else {
        throw new Error('获取信息失败')
      }
    }catch (e: any) {
      LogError(e)
    }
  }
}

export default MusicApi