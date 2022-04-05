export const state = () => ({
  users: [],
})

export const actions = {
  async getUsers({ commit }) {
    const users = await this.$axios.$get('http://localhost:3002/users')
    commit('SET_USERS', users)
  },
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
}
