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
  const config = useRuntimeConfig()

  const { login } = useSanctumAuth()


  const input = ref({
    email: 'test@gmail.com',
    password: '123123'
  })

  function onLogin() {
    login(input.value).then(data => {
      console.log(data)
      useUserStore().setToken(data.accessToken)
      useUserStore().setUser(data.user)
      useRouter().replace('/')

    })
  }

</script>

<style></style>
