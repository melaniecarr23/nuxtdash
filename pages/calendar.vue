<script setup>
import { computed } from 'vue';

import { useDashStore } from '~/stores/dashStore.ts';

// Access the Pinia store
const dashStore = useDashStore();

// Create a computed property to access calendarData
const calendarData = computed(() => dashStore.calendarData);
</script>

<template>
    <div class="calendar" v-if="calendarData">
<!--      <div v-for="(week, index) in calendarData.value.days_weekly" :key="index" class="day">-->
<!--        <div class="day-header">-->
          <pre>{{ calendarData }}</pre>
<!--        </div>-->
<!--        <div v-for="appointment in day.appointments" :key="appointment.id" class="appointment">-->
<!--          <div :class="appointment.color">-->
<!--            {{ formatTime(appointment.date_time) }} - {{ appointment.type_id }}-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </template>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>