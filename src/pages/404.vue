<template>
<div class="relative h-screen">
  <div class="box">
    <h1 class="font-bold text-5xl">404,页面无法找到</h1>
    <div class="goToHome">
      <router-link to="/"><p>回到首页</p></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotFond',
  data () {
  }
}
</script>

<style lang="sass" scoped>
.box
  @apply absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  .goToHome
    @apply text-center text-blue-400 my-4 inline-block text-center w-full
    text-decoration: underline
  </style>
