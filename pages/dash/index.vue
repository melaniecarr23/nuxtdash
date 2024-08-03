<script setup lang="ts">
definePageMeta({
  middleware: ['sanctum:auth']
})
import { useDashStore } from '~/stores/dashStore'
const dashStore = useDashStore()
const user = dashStore.user
await fetch('sanctum/csrf-cookie')
</script>

<template>
<h1>Doc Dash Index</h1>
  <p>Welcome </p>
</template>

<style scoped>

</style>