<template>
  <div>
    <div>
      <el-avatar :size="50" :src="circleUrl" />
      <span class="label">{{}}的音乐库</span>
    </div>
    <div class="flex gap-10 mt-4">
      <div class="likeMusicCard"></div>
      <div class="likeMusicList"></div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MusicApi from '../../../Api/music';
import { useUserStore } from '../../../store/user';

const userStore = useUserStore()

const myLike = ref([])

onMounted(async () => {
  let res = await MusicApi.getUserInfoList({
    uid:userStore.getUserInfo().userId,
    timerstamp:Date.now()
  })
  console.log("🚀 ~ file: musicLibraryPage.vue ~ line 27 ~ onMounted ~ res", res)
  myLike.value = res[0]
})
</script>

<style scoped lang="sass">
.label
  @apply font-bold text-5xl
.likeMusicCard
  @apply flex flex-col h-60 bg-blue-400 rounded
  width: 40%
.likeMusicList
  @apply flex flex-col h-60 bg-blue-400 rounded
  width: 60%
</style>
