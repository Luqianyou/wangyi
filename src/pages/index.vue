<!--
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-layout-header">
        <Header></Header>
      </el-header>
      <el-main class="common-layout-contain">
          <Contain></Contain>
      </el-main>
      <el-footer class="common-layout-footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer/index.vue'
import Header from './Header/index.vue'
import Contain from './Contain/index.vue'
</script>
``
<style lang="sass" scoped>
.common-layout
  @apply w-full h-full
  &-header
    @apply w-full h-24  fixed top-0 bg-white px-28
    background: hsla(0, 0%, 100%, .8)
    -webkit-backdrop-filter: blur(4px)
    backdrop-filter: saturate(180%) blur(20px)
    z-index:999
  &-contain
    @apply w-full h-full m-0 p-0 px-28
  &-footer
    @apply w-full h-20 bg-red-400 fixed bottom-0
    background: hsla(0, 0%, 100%, .8)
    -webkit-backdrop-filter: blur(4px)
    backdrop-filter: saturate(180%) blur(20px)
</style>
