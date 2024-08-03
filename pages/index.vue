<template>
  <div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script lang="ts" setup>

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)
  
</script>

<style></style>
