<template>
<div>
  <a-row>
    <a-col :span="4">{{'<>'}}</a-col>
    <a-col :span="12">
    <div class="flex">
    <div>123</div>
    <div>123</div>[]
    <div>123</div>
    </div>
    </a-col>
    <a-col :span="8">
    <a-input/>
    </a-col>
  </a-row>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let input2 = ref<string>('')
</script>

<style></style>