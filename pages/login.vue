<template>
  <VContainer>
    <VRow justify="center">
      <VCol cols="12" sm="8" md="4" lg="3">


        <VForm @submit.prevent="login">
          <VCard>
            <VCardTitle>Login</VCardTitle>
            <VCardText>
              <VTextField label="Email" v-model='input.email' />
              <VTextField label="Password" v-model='input.password' />
              <VBtn>Login</VBtn>
            </VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn type="submit">Login</VBtn>
            </VCardActions>
          </VCard>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts" setup>
  const config = useRuntimeConfig()

  const input = ref({
    email: 'test@gmail.com',
    password: '123123'
  })

  function login() {
    $fetch(config.public.apiURL + '/auth/login', {
      method: 'POST',
      body: input.value
    }).then((data: any) => {
      useUserStore().setToken(data.accessToken)
      return $fetch(config.public.apiURL + '/auth/user', {
        headers: useUserStore().authorizationHeader
      })
    }).then((data: any) => {
      useUserStore().setUser(data)
      useRouter().replace('/')
    })



  }
</script>

<style></style>
