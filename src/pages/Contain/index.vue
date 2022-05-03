<template>
    <div class="mt-24">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.fade-enter-from
  opacity:0
.fade-enter-active
  transition: all 1s ease
.fade-enter-to
  opacity:1
</style>
