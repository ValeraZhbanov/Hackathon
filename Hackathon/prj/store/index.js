export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('auth/getAuthUser')
      // eslint-disable-next-line no-console
      .then((user) =>
        // eslint-disable-next-line no-console
        console.log(
          `Authenticated - ${user.email} - ${user.fio}: ${new Date()}`
        )
      )
      // eslint-disable-next-line no-console
      .catch(() => console.log(`Guest: ${new Date()}`))
  },
}
