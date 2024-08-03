// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@vueuse/nuxt', "@pinia/nuxt", "vuetify-nuxt-module", "nuxt-auth-sanctum"],
  runtimeConfig: {
    public: {
      apiURL: 'http://localhost:8000/api',
    },
  },
  sanctum: {
    baseUrl: 'http://localhost:8000', // Laravel API
    endpoints: {
      login: '/login',
      logout: '/logout',
    },
    csrf: {
      cookie: 'XSRF-TOKEN',
      header: 'X-XSRF-TOKEN',
    },
  },
})
