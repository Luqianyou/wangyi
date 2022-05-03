<template>
<div>
  <i class="iconfont" :class="props.className" :style="props.styleForm"></i>
</div>
</template>

<script setup lang="ts">
type Props = {
  className: string,
  styleForm?: {
    [key: string]: string
  }
}

const props = defineProps<Props>()
</script>

<style scoped lang="sass">
.iconfont:active
  @apply inline-block
  transform: scale(0.9, 0.9)
</style>