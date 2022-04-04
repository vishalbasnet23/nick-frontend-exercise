export const state = () => ({
  userAuth: false,
})

export const mutations = {
  LOGIN_USER(state) {
    state.userAuth = true
  },
}

export const actions = {
  handleLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('global/SET_LOADING', true, { root: true })
      commit('global/SET_LOADING_MESSAGE', 'Signing you in', { root: true })
      commit('global/SET_ERROR', false, { root: true })
      setTimeout(() => {
        if (payload.email === 'admin' && payload.password === '1234') {
          commit('LOGIN_USER')
          commit('global/SET_ERROR', false, { root: true })
          commit('global/SET_ERROR_MESSAGE', '', {
            root: true,
          })
          this.app.router.push('/users')
        } else {
          commit('global/SET_ERROR', true, { root: true })
          commit('global/SET_ERROR_MESSAGE', 'Invalid Credentials', {
            root: true,
          })
        }
        commit('global/SET_LOADING', false, { root: true })
        commit('global/SET_LOADING_MESSAGE', '', { root: true })
        resolve()
      }, 1000)
    })
  },
}

export const getters = {
  userAuthenticated(state) {
    return state.userAuth
  },
}
