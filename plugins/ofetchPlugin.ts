import { $fetch } from 'ofetch';

export default defineNuxtPlugin(async (nuxtApp) => {
  const baseURL = "http://localhost:8000/api";
  const headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  // Fetch CSRF token
  const response = await $fetch('/sanctum/csrf-cookie', {
    baseURL: "http://localhost:8000",
    credentials: 'include', // This is equivalent to axios.defaults.withCredentials = true
    headers: headers,
  });
  if(response) {
    console.log(response);
  }
  // Create a custom instance of $fetch with default options
  const customFetch = $fetch.create({
    baseURL: baseURL,
    credentials: 'include', // This is equivalent to axios.defaults.withCredentials = true
    headers: headers,
  });

  // Make the customFetch available globally
  nuxtApp.provide('customFetch', customFetch);
});

declare module '#app' {
  interface NuxtApp {
    $customFetch: typeof $fetch;
  }
}