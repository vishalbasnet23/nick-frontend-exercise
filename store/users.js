export const state = () => ({
  users: [],
})

export const actions = {
  async getUsers({ commit }) {
    const users = await this.$axios.$get('https://mock.follow.it/profiles.json')
    commit('SET_USERS', users)
  },
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
}
