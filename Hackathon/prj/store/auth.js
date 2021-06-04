export const state = () => ({
  user: null,
})

export const getters = {
  authUser(state) {
    return state.user || null
  },
  isAuthenticated(state) {
    return !!state.user
  },
  isAdmin(state) {
    if (!state.user) {
      return false
    }
    return state.user.roles.find((role) => role.role === 'admin') || false
  },
  isObserver(state) {
    if (!state.user) {
      return false
    }
    return state.user.roles.find((role) => role.role === 'expert') || false
  },
  isUser(state) {
    if (!state.user) {
      return false
    }
    return state.user.roles.find((role) => role.role === 'user') || false
  },
}

export const actions = {
  login({ commit, state }, loginData) {
    console.log("стор")
    console.log(loginData)
    return this.$axios
      .$post('/api/v1/users/login', loginData)
      .then((user) => {
        commit('setAuthUser', user)
        return state.user
      })
      .catch((error) => Promise.reject(error))
  },
  logout({ commit }) {
    return this.$axios
      .$post('/api/v1/users/logout')
      .then(() => {
        commit('setAuthUser', null)
        return true
      })
      .catch((error) => Promise.reject(error))
  },
  register(_, registerData) {
    return this.$axios
      .$post('/api/v1/users/register', registerData)
      .catch((error) => {
        let errorMessage = 'Uuups, something went wrong, try to register again!'
        if (error.response.data.errors) {
          errorMessage = error.response.data.errors.message
        }
        return Promise.reject(errorMessage)
      })
  },
  getAuthUser({ commit, getters, state }) {
    const authUser = getters.authUser

    if (authUser) {
      return Promise.resolve(authUser)
    }

    return this.$axios
      .$get('/api/v1/users/me')
      .then((user) => {
        commit('setAuthUser', user)
        return state.user
      })
      .catch((error) => {
        commit('setAuthUser', null)
        return Promise.reject(error)
      })
  },
  forgotPassword(_, password) {
    return this.$axios
      .$post('/api/v1/users/forgotpassword', password)
      .then((res) => {
        return res
      })
      .catch((error) => Promise.reject(error))
  },
  resetPassword(_, { form, resettoken }) {
    return this.$axios
      .$put(`/api/v1/users/resetpassword/${resettoken}`, form)
      .then((res) => {
        return res
      })
      .catch((error) => Promise.reject(error))
  },
}

export const mutations = {
  setAuthUser(state, user) {
    state.user = user
  },
}
