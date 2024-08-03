export const useUserStore = defineStore({
  id: 'myUserStore',
  state: () => ({
    type: 'Bearer',
    token: '',
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    authorizationHeader: (state) => {
      return {
        Authorization: `${state.type} ${state.token}`,
      }
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    logout() {
      this.token = ''
    },
  },

})
