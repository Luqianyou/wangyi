<template>

    <div class="my-24">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
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
