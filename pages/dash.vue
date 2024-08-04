<template>
  <VContainer>
    <VCard>
      <VToolbar>
        <VToolbarTitle>Dashboard</VToolbarTitle>
        <VBtn exact to="/dash">Dashboard</VBtn>
        <VBtn to="/dash/second">Second</VBtn>
        <VBtn to="/dash/third">Third</VBtn>
        <VSpacer />
        <VBtn variant="elevated" color="error" @click="onLogout()">Logout</VBtn>
      </VToolbar>
    </VCard>
  </VContainer>

  <NuxtPage />
</template>

<script lang="ts" setup>
  definePageMeta({
    middleware: ['sanctum:auth'],
  })

  function onLogout() {
    useSanctumAuth().logout()
  }
</script>
