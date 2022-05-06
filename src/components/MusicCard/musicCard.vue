<template>
  <div class="my-3">
    <div
      class="relative flex justify-center items-center"
      @mouseenter="showhover"
      @mouseleave="hidehover"
      @click="pushMusicId"
    >
      <el-avatar
        :class="hover ? 'avatarimg' : ''"
        shape="square"
        :size="220"
        fit="fill"
        :src="(props.musicCard.picUrl as string)"
      />
      <div v-if="hover" class="mubu" @click="playMusicList">
        <g-icon :className="'icon-bofang text-3xl text-white'"></g-icon>
      </div>
    </div>
    <div>
      <div class="musicCard">{{ props.musicCard.name }}</div>
      <div class="text-sm text-gray-400  w-52">{{ props.musicCard.copywriter }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface musicCardProps {
  [x: string]: number | string
}

const hover = ref<boolean>(false)
const isPlay = ref<boolean>(false)

const props = defineProps<{
  musicCard: musicCardProps
}>()

const emit = defineEmits<{
  (e:'clickCard',musicCardId:number):void
}>()

function showhover() {
  hover.value = true
}

function hidehover() {
  hover.value = false
}

function playMusicList(){
isPlay.value = true
}

function pushMusicId(){
  if(isPlay.value){
      isPlay.value = false
  }else{
    emit('clickCard',props?.musicCard?.id as number)
  }
}
</script>

<style scoped lang="sass">
.avatarimg
  @apply shadow-2xl
.mubu
  @apply absolute w-9 h-9 flex justify-center items-center rounded-full
  top:50%
  left:50%
  transform: translate(-50%, -50%)
  background: rgba(20,20 , 20, 0.5)
  -webkit-backdrop-filter: blur(4px)
  backdrop-filter: blur(4px)
.mubu:hover
  background: rgba(20,20 , 20, 0.6)

.musicCard
  @apply font-bold w-52
.musicCard:hover
  @apply underline
</style>
