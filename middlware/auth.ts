// middleware/auth.ts

import { useDashStore } from '~/stores/dashStore'

export default defineNuxtRouteMiddleware((to) => {
  const dashStore = useDashStore()

  // Allow access to the login page for guests
  if (to.path === '/dash/login') {
    return
  }

  // Check if the user is logged in
  if (!dashStore.isAuthenticated && to.path.startsWith('/dash')) {
    // If not authenticated and trying to access /dash, redirect to /dash/login
    return navigateTo('/dash/login')
  }
})
