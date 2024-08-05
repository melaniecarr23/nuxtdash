<template>
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'

import { useDashStore } from '~/stores/dashStore.ts';
const dashStore = useDashStore()
const { $customFetch } = useNuxtApp();

onMounted(async () => {
  try {
    console.log('Fetching calendar data');
    const data = await $customFetch('/calendar');
    if (data) {
      console.log('Saving calendar data');
      dashStore.setCalendarData(data);
    } else {
      console.error('No data returned from API');
    }

  } catch (err) {
    console.error('Error fetching calendar data:', err);
  }
});
</script>