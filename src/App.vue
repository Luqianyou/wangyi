<template>
  <router-view/>
</template>

<script setup lang="ts">
 import NProgress from 'nprogress';
 import router from './router';
 router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
</script>

<style>
</style>
