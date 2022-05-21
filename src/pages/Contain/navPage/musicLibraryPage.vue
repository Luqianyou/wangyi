<!--
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
-->
<template>
  <div>
    <div>
      <el-avatar :size="50" :src="userInfo.imgUrl" />
      <span class="label">{{userInfo.nickname}}的音乐库</span>
    </div>
    <div class="flex gap-10 mt-8">
      <div class="likeMusicCard">
        <div>人生就像一座山，重要的不是它的高低，而在于灵秀；人生就像一场雨，重要的不是它的大小，而在于及时。</div>
        <div>我喜欢的音乐</div>
      </div>
      <div class="likeMusicList"></div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import MusicApi from '../../../Api/music';
import { useUserStore } from '../../../store/user';

const userStore = useUserStore()

const userInfo = reactive<{
  imgUrl: string,
  nickname: string,
}>({
  imgUrl: '',
  nickname: ''
})

const AllMusicList = ref<Array<any>>([])
const createdMusicList = ref<Array<any>>([])
const collectedMusicList = ref<Array<any>>([])

const myLike = ref([])

onMounted(async () => {
  let res = await MusicApi.getUserInfoList({
    uid:userStore.getUserInfo().userId,
    timerstamp:Date.now()
  })
  console.log("🚀 ~ file: musicLibraryPage.vue ~ line 45 ~ onMounted ~ res", res)
  userInfo.imgUrl = userStore.getUserInfo().avatarUrl
  userInfo.nickname = userStore.getUserInfo().nickname
  const index = res.findIndex((item:any)=>item.subscribed === true)
  AllMusicList.value = res.slice(1)
  collectedMusicList.value = res.slice(index)
  createdMusicList.value = res.slice(1,index)
})
</script>

<style scoped lang="sass">
.label
  @apply font-bold text-5xl ml-4
.likeMusicCard
  @apply flex flex-col h-64 bg-blue-200 rounded
  width: 32%
.likeMusicList
  @apply flex flex-col h-64 rounded
  width: 68%
</style>
