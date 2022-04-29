import { ElMessage } from "element-plus/es"
import request from '../network/request'

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
      ElMessage.error(e.message)
    }
  }
}

export default MusicApi