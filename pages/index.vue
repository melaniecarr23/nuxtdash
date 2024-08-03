<template>
  <div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script lang="ts" setup>
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  const user = await $fetch(config.public.apiURL + '/auth/user', {
    headers: userStore.authorizationHeader
  })

</script>

<style></style>
