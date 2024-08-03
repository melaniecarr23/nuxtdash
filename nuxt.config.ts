// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@vueuse/nuxt', "@pinia/nuxt", "vuetify-nuxt-module", "nuxt-auth-sanctum"],
  runtimeConfig: {
    public: {
      baseURL: 'https://localhost',
      apiBase: 'https://localhost:8000/api',
    },
  },
  sanctum: {
    mode: 'token',
    baseUrl: 'https://dash.test', // Laravel API
    endpoints: {
      login: 'api/login',
      logout: 'api/logout'
    }
  },
})
