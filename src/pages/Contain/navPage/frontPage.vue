<template>
<div>
  <div class="flex justify-between">
  <div>
    <span class="label">推荐歌单</span>
  </div>
  <div>
      <span class="more">查看更多</span>
  </div>
  </div>
  <div>
    <music-card-list :cardList="RecommendList"></music-card-list>
  </div>
</div>
</template>

<script setup lang="ts">
import musicCardList from '@/components/MusicCardList/musicCardList.vue'
import { onMounted, ref } from 'vue';
import MusicApi from '../../../Api/music';
const RecommendList = ref<Array<object>>([])
onMounted(async ()=>{
  let res = await MusicApi.getRecommendSongList()
  RecommendList.value = res
})
</script>

<style scoped lang="sass">
.label
  @apply text-3xl font-bold
.more
  line-height: 100%
</style>