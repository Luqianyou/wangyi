import { defineStore } from "pinia";
import { ref } from "vue";

export const useMusicStore = defineStore('music', () => {
  const musicUrl = ref<string>()
})