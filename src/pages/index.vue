<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Contain></Contain>
      </el-main>
      <el-footer>
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

<style lang="sass" scoped></style>
