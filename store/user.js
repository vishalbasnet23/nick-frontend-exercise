export const state = () => ({
  userAuth: false,
  errorMessage: ''
})

export const mutations = {
  LOGIN_USER(state) {
    state.userAuth = true
  },
  SET_ERROR(state) {
    state.errorMessage = 'error'
  },
}

export const actions = {
  handleLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payload.email === 'admin' && payload.password === '1234') {
          commit('LOGIN_USER')
        } else {
          commit('SET_ERROR')
        }
      }, 1000)
    })
  },
}
