<template>
<input type="text" v-model="account"/>
  <div><el-button type="primary" @click="clickhandle">Primary</el-button></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MusicApi from '../Api/music';


let account = ref<number>(0)

watch(account, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})

async function clickhandle() {
  let res = await MusicApi.getSongDetailById({ id: 33894312 })
  console.log("🚀 ~ file: index.vue ~ line 19 ~ clickhandle ~ res", res)
  
  console.log(account.value);
}
</script>

<style lang="sass" scoped></style>
