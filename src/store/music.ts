import { defineStore } from "pinia";
import { ref } from "vue";

export const useMusicStore = defineStore('music', () => {
  const musicId = ref<number>();
  const isPlay = ref<boolean>(false)
  const musicList = ref<any[]>([])
  const musicListId = ref<number>()
  const currentIndex = ref<number>(-1)
  const isMusicDetailCardShow = ref<boolean>(false)
  const currentTime = ref<number>(0)
  const isMusicLoad = ref<boolean>(false)
  const currentRowInfo = ref<any>()
  const likeMuiscList = ref<any[]>([])
  const subAlbumList = ref<any>()
  const subSingerList = ref<any>()
  const subVideoList = ref<any>()
  const collectMusicList = ref<any[]>([])
  const createdMusicList = ref<any[]>([])
  const likeVideoList = ref<any[]>([])

  function updateMusicId(id:number){
    musicId.value = id
  }

  function changePlayState(paly:boolean){
    isPlay.value = paly
  }

  function updateMusicList(payload:any){
    if (payload.musicListId !== musicListId.value) {
      musicListId.value = payload.musicListId
      currentIndex.value = -1
    }
  }

  function updateCurrentIndex(index:number){
    currentIndex.value = index
  }

  function changeMusicDetailCardState(state:any){
    isMusicDetailCardShow.value = !state.isMusicDetailCardShow
  }

  function updateCurrentTime(time:number){
    currentTime.value = time
  }

  function updateMusicLoadState(state:boolean){
    isMusicLoad.value = state
  }

  function updateCurrentRowInfo(info:any){
    currentRowInfo.value = info
  }

  function updateLikeMusicList(data:any){
    likeMuiscList.value = data.likeMuiscList
  }

  function updateSubAlbumList(data:any){
    subAlbumList.value = data.subAlbumList
  }

  function updateSubSingerList(data:any){
    subSingerList.value = data.subSingerList
  }

  function updateSubVideoList(data:any){
    subVideoList.value = data.subVideoList
  }

  function updateCollectMusicList(data:any){
    collectMusicList.value = data.collectMusicList
  }

  function updateCreatedMusicList(data:any){
    createdMusicList.value = data.createdMusicList
  }

  function updateLikeVideoList(data:any){
    likeVideoList.value = data.likeVideoList
  }

  return {
    musicId,
    isPlay,
    musicList,
    musicListId,
    currentIndex,
    isMusicLoad,
    currentRowInfo,
    likeMuiscList,
    subAlbumList,
    subSingerList,
    subVideoList,
    collectMusicList,
    createdMusicList,
    likeVideoList,
    isMusicDetailCardShow,
    currentTime,


    updateMusicId,
    changePlayState,
    updateMusicList,
    updateCurrentIndex,
    changeMusicDetailCardState,
    updateCurrentTime,
    updateMusicLoadState,
    updateCurrentRowInfo,
    updateLikeMusicList,
    updateSubAlbumList,
    updateSubSingerList,
    updateSubVideoList,
    updateCollectMusicList,
    updateCreatedMusicList,
    updateLikeVideoList
  }
})