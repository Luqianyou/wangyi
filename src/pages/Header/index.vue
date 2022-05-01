<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div class="flex gap-8 justify-center items-center h-24">
          <div class="block w-10 h-10" @click="getmusic">
            <span>{{ '<' }}</span>
          </div>
          <div class="block w-10 h-10">
            <span>{{ '>' }}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="flex justify-center items-center gap-8 h-24">
          <div class="mx-8" @click="changePage">首页</div>
          <div class="mx-8" @click="changePage">发现</div>
          <div class="mx-8" @click="changePage">音乐库</div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="flex gap-5 items-center justify-center h-24">
          <el-input
            v-model="input2"
            class="w-35"
            placeholder="Type something"
            :prefix-icon="Search"
          />
          <div class="flex justify-center items-center">
            <el-avatar :size="50" :src="circleUrl" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MusicApi from '../../Api/music';
let input2 = ref<string>('')
let circleUrl = ref<string>('')
let route = useRoute()
console.log("🚀 ~ file: index.vue ~ line 45 ~ route", route)

async function getmusic(){
 let res = await MusicApi.getSongDetailById({id:33894312})
 console.log("🚀 ~ file: index.vue ~ line 50 ~ getmusic ~ res", res)
}

function changePage(e: any){
  console.log("🚀 ~ file: index.vue ~ line 55 ~ changePage ~ e", e)
}
</script>

<style lang="sass" scoped></style>
