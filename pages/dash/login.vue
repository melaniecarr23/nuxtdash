<template>
  <VContainer>
    <VRow justify="center">
      <VCol cols="12" sm="8" md="4" lg="3">
        <VForm @submit.prevent="onLogin">
          <VCard>
            <VCardTitle>Login</VCardTitle>
            <VCardText>
              <VTextField label="Email" v-model='input.email' />
              <VTextField label="Password" v-model='input.password' />
            </VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn type="submit" variant="elevated" color="primary" class="px-5" prepend-icon="mdi-check">Login</VBtn>
            </VCardActions>
          </VCard>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['sanctum:guest']
})
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDashStore } from '~/stores/dashStore'

const router = useRouter()
const { login } = useSanctumAuth()
const dashStore = useDashStore()

const input = ref({
  email: 'test@gmail.com',
  password: '123123'
})

async function onLogin() {
  try {
    const { data } = await login(input.value)
    console.log(data)
    dashStore.setUser(data.user) // Assuming the user data is returned as `data.user`
    router.replace('/dash')
  } catch (error) {
    console.error('Login failed', error)
  }
}
</script>

<style></style>
