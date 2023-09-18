// menggunakan state management pinia
import { defineStore } from 'pinia'

// definisikan fungsi useUserStore yang nanti akan digunakan di layouts/MainLayout.vue
export const useUserStore = defineStore('user', {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false,
  }),

  actions: {
    async getAllPosts() {
      let res = await useFetch('/api/get-all-posts')
      this.posts = res.data
      return res.data
    }
  },
})