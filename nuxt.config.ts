  import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

  export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    ssr: false,
    modules: ['@vueuse/nuxt', "@pinia/nuxt",
      (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }],
    build: {
      transpile: ['vuetify'],
    },
    runtimeConfig: {
      public: {
        apiURL: 'http://localhost:8000/api',
      },
    },
    vite: {
      vue: {
        template: {
          transformAssetUrls,
        },
      },
    }
  })
