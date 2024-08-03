<template>
  <div>
    <h1>Public Dash</h1>
    <p>This is the area for innerhealer.org public site</p>
  </div>
</template>

<script lang="ts" setup>

  definePageMeta({
    middleware: ['sanctum:guest']
  })
</script>

<style></style>
