export const state = () => ({
  errorMessage: '',
  isLoading: false,
  isError: false,
  loadingMessage: '',
})

export const mutations = {
  SET_LOADING(state, loadingFlag) {
    state.isLoading = loadingFlag
  },
  SET_ERROR(state, errorFlag) {
    state.isError = errorFlag
  },
  SET_ERROR_MESSAGE(state, errorMessage) {
    state.errorMessage = errorMessage
  },
  SET_LOADING_MESSAGE(state, loadingMessage) {
    state.loadingMessage = loadingMessage
  },
}

export const getters = {
  loadingState(state) {
    return state.isLoading
  },
  loadingMessage(state) {
    return state.loadingMessage
  },
  errorState(state) {
    return state.isError
  },
  errorMessage(state) {
    return state.errorMessage
  },
}
