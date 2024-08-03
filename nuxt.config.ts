// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "vuetify-nuxt-module"],
  runtimeConfig: {
    public: {
      baseURL: 'https://localhost',
      apiBase: 'https://localhost:8000/api',
    },
  },
})

