export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hakaton',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

/*   // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'], */

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    /* { src: '~/plugins/filters' }, */
    /* { src: '~/plugins/vuelidate' }, */
    /* { src: '~/plugins/toasted', ssr: false },
    { src: '~/plugins/vue-datepicker', ssr: false }, */
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  serverMiddleware: ['~/server/routes/index'],
  server: {
    port: 8080,
    // host: '192.168.77.84'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
