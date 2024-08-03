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

  const { data: user } = await useAsyncData(
    'user',
    () => $fetch(config.public.apiURL + '/auth/user', {
      headers: userStore.authorizationHeader
    })
  );

  onMounted(() => {
    if (!userStore.isAuthenticated) {
      useRouter().replace('/login')
    }
  })

</script>

<style></style>
