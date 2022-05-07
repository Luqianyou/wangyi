<template>
  <div class="music-card-list">
    <div v-for="item in props.cardList" :key="item.id">
      <music-card @clickCard="emitId" :musicCard="item"></music-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import musicCard from '@/components/MusicCard/musicCard.vue'

const props = defineProps<{
  cardList: any[]
}>()

const emit = defineEmits<{
  (e: 'clickCard', id: number): void
}>()

function emitId(id:number){
emit('clickCard',id)
}
</script>

<style lang="sass" scoped>
.music-card-list
  @apply flex flex-wrap w-full mt-3 gap-12
</style>
