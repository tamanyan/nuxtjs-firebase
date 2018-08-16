
import Vuex from 'vuex'

const store = () => new Vuex.Store({
  // global variables
  state: {
    user: {
      id: "1",
      name: "Guest"
    }
  },
  mutations: {
  },
  actions: {
    async nuxtServerInit({ commit }, { app }) {
    }
  },
  plugins: [
  ]
})

export default store
