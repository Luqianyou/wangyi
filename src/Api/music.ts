import request from '../network/request'
import { LogError} from '../utils/LogError'

interface Req {
  id: number
}
interface Res {
  data: any
}

class MusicApi{
  static async getSongDetailById(data: Req){
    try {
      let res = await request<Req, Res>({
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