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

  const { user } = storeToRefs(userStore)

  useAsyncData(
    'user',
    () => $fetch(config.public.apiURL + '/auth/user', {
      headers: userStore.authorizationHeader
    }).then((data: any) => {
      userStore.setUser(data)
    })
  )

  onMounted(() => {
    if (!userStore.isAuthenticated) {
      useRouter().replace('/login')
    }
  })

</script>

<style></style>
