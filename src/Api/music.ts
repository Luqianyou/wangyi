import request from '../network/request'
import { LogError } from '../utils/LogError'

interface loginTime {
  timerstamp: number
}

interface loginKey {
  key: string
  qrimg?: boolean
}

interface loginPhoneData {
  phone: number
  md5_password: string | number
}

interface loginEmailData {
  email: string
  md5_password: string | number
}
interface getSongDetailByIdReq {
  id: number
}

interface getUserLikeListReq {
  uid:number
}

interface Res {
  profile?: any
  data?: any
  code?: number
  unikey?: string
  qrimg?: string
}

class MusicApi {
  static async getLoginKey(data: loginTime) {
    try {
      let res = await request<loginTime, Res>({
        url: '/login/qr/key',
        method: 'get',
        data,
        withCredentials: true,
      })
      if (res.code === 200) {
        return res?.data?.unikey
      }
    } catch (e) {
      console.log(e)
    }
  }

  static async getLoginQr(data: loginTime & loginKey) {
    try {
      let res = await request<loginTime & loginKey, Res>({
        url: '/login/qr/create',
        method: 'get',
        data,
        withCredentials: true,
      })
      if (res.code === 200) {
        return res?.data?.qrimg
      }
    } catch (e) {
      console.log(e)
    }
  }

  static async checkLoginStatus(data: loginTime & loginKey) {
    try {
      let res = await request<loginTime & loginKey, Res>({
        url: '/login/qr/check',
        method: 'get',
        data,
        withCredentials: true,
      })
      return res
    } catch (e) {
      console.log(e)
    }
  }

  static async getLoginStatus(data: loginTime) {
    try {
      let res = await request<loginTime, Res>({
        url: '/login/status',
        method: 'get',
        data,
        withCredentials: true,
      })
      if (res?.data?.code === 200) {
        return res?.data?.profile
      }
    } catch (e) {
      console.log(
        '🚀 ~ file: music.ts ~ line 93 ~ MusicApi ~ getLoginStatus ~ e',
        e
      )
      LogError(new Error('获取登录状态失败'))
    }
  }

  static async loginByPhone(data: loginPhoneData) {
    try {
      let res = await request<loginPhoneData, Res>({
        url: '/login/cellphone',
        method: 'get',
        data,
      })
      if (res.code === 200) {
        return res.profile
      }
    } catch (e: any) {
      console.log(
        '🚀 ~ file: music.ts ~ line 108 ~ MusicApi ~ loginByPhone ~ e',
        e
      )
      LogError(new Error('登录失败，请输入正确的手机号和密码'))
    }
  }

  static async loginByEmail(data: loginEmailData) {
    try {
      let res = await request<loginEmailData, Res>({
        url: '/login',
        method: 'get',
        data,
      })
      if (res.code === 200) {
        return res.profile
      }
    } catch (e: any) {
      console.log(
        '🚀 ~ file: music.ts ~ line 123 ~ MusicApi ~ loginByEmail ~ e',
        e
      )
      LogError(new Error('登录失败，请输入正确的邮箱和密码'))
    }
  }

  static async getUserLikeList(data:getUserLikeListReq & loginTime) {
    try{
      let res = await request<getUserLikeListReq & loginTime, Res>({
        url:'/user/playlist',
        method:'get',
        data,
      })
      if(res.code === 200){
        return res.playlist
      }
    }catch(e:any){
      LogError(e)
    }
  }

  static async getRecommendSongList() {
    try {
      let res = await request<{}, Res>({
        url: '/personalized',
        method: 'get',
        data:{limit:10}
      })
      if(res.code === 200){
        return res.result
      }
    } catch (e: any) {
      LogError(e)
    }
  }

  static async getMusicCardDetailById(){}

  static async getSongDetailById(data: getSongDetailByIdReq) {
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
    } catch (e: any) {
      LogError(e)
    }
  }
}

export default MusicApi
