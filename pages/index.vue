<template>
  <div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script lang="ts" setup>

const user = useSanctumUser()
  
</script>

<style></style>
