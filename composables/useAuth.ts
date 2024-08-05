import { useRouter } from 'vue-router';

export const useAuth = () => {
  // Define the payload interfaces
  interface LoginPayload {
    email: string;
    password: string;
  }

  interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }

  // Access the custom fetch instance
  const { $customFetch } = useNuxtApp();

  // Define the login function
  async function login(payload: LoginPayload) {
    await $customFetch('/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    useRouter().push('/dash');
  }

  // Define the logout function
  async function logout() {
    await $customFetch('/logout', {
      method: 'POST',
    });
    useRouter().replace('/login');
  }

  // Define the register function
  async function register(payload: RegisterPayload) {
    await $customFetch('/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    await login({
      email: payload.email,
      password: payload.password,
    });
  }

  // Return the functions
  return {
    login,
    logout,
    register,
  };
};