export const state = () => ({
  errorMessage: '',
  isLoading: false,
  isError: false,
  loadingMessage: '',
  successMessage: '',
  isSuccess: false
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
  SET_SUCCESS_MESSAGE(state, successMessage) {
    state.successMessage = successMessage
  },
  SET_SUCCESS(state, successFlag) {
    state.isSuccess = successFlag
  }
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
  successState(state) {
    return state.isSuccess
  },
  errorMessage(state) {
    return state.errorMessage
  },
  successMessage(state) {
    return state.successMessage
  }
}
