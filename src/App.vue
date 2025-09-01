<script setup lang="ts">
import {computed} from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
const useStore = useCounterStore()
const elLocale = computed(() => useStore.elLocale)
</script>

<template>
  <el-config-provider :locale="elLocale">
    <RouterView/>
  </el-config-provider>

</template>

<style scoped>

</style>
