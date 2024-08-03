import { useStorage as vueUseStorage, StorageSerializers } from "@vueuse/core"

interface User {
  id: number
  name: string
  email: string
  "email_verified_at": string,
  "created_at": string,
  "updated_at": string

}

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    token: vueUseStorage('token', ''),
    user: vueUseStorage('user', {}, undefined, {
      serializer: {
        read: (v: any) => {
          console.log('Read user data');
          
          return v ? JSON.parse(v) : null
        },
        write: (v: any) => JSON.stringify(v),
      },
    },),
  }),
  getters: {
    me: (state) => state.user,
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
