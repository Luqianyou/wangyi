<template>
  <div class="relative">
    <div class="progress">
      <el-progress :percentage="50" />
    </div>
    <audio
      :src="musicUrl"
      ref="audioPlayer"
      @play="changeState(true)"
      @pause="changeState(false)"
      @ended="changeMusic('next')"
      @timeupdate="updateTime"
    ></audio>

    <el-row class="row-style">
      <el-col :span="4">
        <div class="gap-5 center">
          <div class="center">
            <el-avatar shape="square" :size="50" :src="squareUrl" />
          </div>
          <div class="song-name">
            <div>你好</div>
            <div class="text-gray-400 text-xs">许嵩</div>
          </div>
          <div class="center">
            <g-icon :className="'icon-kongxin text-xl'"></g-icon>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="center gap-5 text-3xl font-bold pt-2">
          <div>
            <g-icon :className="'icon-shangyishou_huaban'"></g-icon>
          </div>
          <div>
            <g-icon :className="'icon-bofang'"></g-icon>
          </div>
          <div>
            <g-icon :className="'icon-xiayishou_huaban'"></g-icon>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="center gap-3 text-xl pt-3">
          <div>
            <g-icon :className="'icon-xunhuanbofang'"></g-icon>
          </div>
          <div>
            <g-icon :className="'icon-suijibofang'"></g-icon>
          </div>
          <div>
            <g-icon :className="'icon-24gl-volumeHigh'"></g-icon>
          </div>
          <div>
            <g-icon :className="'icon-bofangliebiao'"></g-icon>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const musicUrl = ref<string>('')

function changeState(data: boolean) {}

function changeMusic(data: string) {}
</script>

<style scoped lang="sass">
:deep(.row-style)
  @apply px-20 w-full h-full pt-1
.center
  @apply flex justify-center items-center
.song-name
  @apply flex-col center font-bold
  user-select: none
</style>
