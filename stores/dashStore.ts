import { defineStore } from 'pinia'

interface User {
  email: string;
  [key: string]: any;
}

export const useDashStore = defineStore('dash', {
  state: () => ({
    user: null as User | null
  }),
  actions: {
    setUser(user: User) {
      this.user = user
    },
    clearUser() {
      this.user = null
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})
