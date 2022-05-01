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
import Footer from './Footer/index.vue';
import Header from './Header/index.vue';
import Contain from './Contain/index.vue';
</script>

<style lang="sass" scoped>
.common-layout
  @apply w-full h-full relative
  &-header
    @apply w-full h-24  fixed top-0 bg-white px-20
    background: hsla(0, 0%, 100%, .75)
    -webkit-backdrop-filter: blur(2px)
    backdrop-filter: blur(2px)
  &-contain
    @apply w-full h-full m-0 p-0 px-20
  &-footer
    @apply w-full h-20 bg-red-400 fixed bottom-0
    background: hsla(0, 0%, 100%, .75)
    -webkit-backdrop-filter: blur(2px)
    backdrop-filter: blur(2px)
</style>
