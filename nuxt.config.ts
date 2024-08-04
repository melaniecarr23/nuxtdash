// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@vueuse/nuxt', "@pinia/nuxt", "vuetify-nuxt-module", "nuxt-auth-sanctum"],
  runtimeConfig: {
    public: {
      apiURL: 'https://dash.test/api',
    },
  },
  sanctum: {
    mode: 'token',
    baseUrl: 'https://dash.test/api', // Laravel API
    endpoints: {
      user:'/user'
    },
    redirect: {
      onLogin: '/dash',
      onLogout: '/',
    },
  },
})
