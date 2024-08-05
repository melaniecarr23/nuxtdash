import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface User {
  email: string;
  [key: string]: any;
}

interface CalendarData {
  days_weekly: any;
  days: any;
  appointments: any;
  startDate: string;
  endDate: string;
}

export const useDashStore = defineStore('dashStore', () => {
  const user = ref<User | null>(null)
  const calendarData = ref<CalendarData | null>(null)

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  const clearUser = () => {
    user.value = null
  }

  const setCalendarData = (data: CalendarData) => {
    console.log(data);
    calendarData.value = data
  }

  const clearCalendarData = () => {
    calendarData.value = null
  }

  const isAuthenticated = computed(() => !!user.value)

  return {
    user,
    setUser,
    clearUser,
    calendarData,
    setCalendarData,
    clearCalendarData,
    isAuthenticated
  }
})
