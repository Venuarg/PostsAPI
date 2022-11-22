import { createStore } from "vuex"
import { Post } from "@/types"
import { getPosts } from "@/api"


interface State {
  posts: Post[]
  page: number
  limit: number
  isLoading: boolean
  total: number | null
}

export default createStore({
  state: (): State => ({
    posts: [],
    page: 1,
    limit: 10,
    total: 100,
    isLoading: false
  }),

  mutations: {

  },

  actions: {
    async fetchPosts ({state}) {
      try {
        state.isLoading = true
        const respone = await getPosts({
          page: state.page,
          limit: state.limit
        })
        state.posts = respone.data
      } catch (e) {
        alert('Error')
      } finally {
        state.isLoading = false
      }
    },
  },

  getters: {

  }
})