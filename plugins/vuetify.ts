// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { VCalendar } from 'vuetify/labs/VCalendar'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VDialog, VForm, VTextField, VCard, VCardTitle, VCardText, VCardActions, VBtn, VSpacer, VContainer, VRow, VCol } from 'vuetify/components';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VCalendar,
      VNumberInput,
      VDialog,
      VForm,
      VTextField,
      VCard,
      VCardTitle,
      VCardText,
      VCardActions,
      VBtn,
      VSpacer,
      VContainer,
      VRow,
      VCol,
    }
  })
  app.vueApp.use(vuetify)
})
