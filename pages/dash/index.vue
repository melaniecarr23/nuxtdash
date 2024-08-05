<script setup lang="ts">
const { $customFetch } = useNuxtApp();

const { data, error } = await $customFetch('/dash');

</script>

<template>
  <VCard title="Dash Index" subtitle="Page for authenticated users only">
    <pre v-if="data">{{data}}</pre>
  </VCard>
</template>

<style scoped></style>
