interface User {
  id: number
  name: string
  email: string
  "email_verified_at": string,
  "created_at": string,
  "updated_at": string

}

export const useUserStore = defineStore({
  id: 'myUserStore',
  state: () => ({
    token: '',
    user: {} as User,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    authorizationHeader: (state) => {
      return {
        Authorization: `Bearer ${state.token}`,
      }
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user
    },
    setToken(token: string) {
      this.token = token
    },
    logout() {
      this.token = ''
    },
  },

})
