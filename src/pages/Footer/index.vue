<template>
<div>
  <audio 
  :src="musicUrl"
  ref="audioPlayer"
  @play="changeState(true)"
  @pause="changeState(false)"
  @ended="changeMusic('next')"
  @timeupdate="updateTime"
  ></audio>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const musicUrl = ref<string>('')

function changeState(data:boolean){}

function changeMusic(data:string){}
</script>

<style></style>