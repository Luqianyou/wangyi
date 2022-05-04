<template>
  <div class="flex flex-col justify-center">
    <div>
      <img class="mx-auto w-20 h-20 my-5" src="@/assets/img/logo.png" alt="" />
      <div class="text-center font-bold text-2xl">登录网易云账号</div>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass"></style>
