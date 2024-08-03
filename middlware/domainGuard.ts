// middleware/domainGuard.ts

import { useDashStore } from '~/stores/dashStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()
  const domain = nuxtApp.ssrContext?.event.context.domain
  console.log(`Navigating to: ${to.path}, Domain: ${domain}`)

  const dashStore = useDashStore()

  // Allow access to /dash/login for all domains
  if (to.path === '/dash/login') {
    return
  }

  // Check if the domain is 'ihcdocdash.com'
  if (domain === 'ihcdocdash.com') {
    // Redirect to /dash/login if trying to access /dash routes without being authenticated
    if (!dashStore.isAuthenticated && to.path.startsWith('/dash')) {
      return navigateTo('/dash/login')
    }
  } else {
    // Redirect to homepage if trying to access /dash routes from other domains
    if (to.path.startsWith('/dash')) {
      return navigateTo('/')
    }
  }
})
