import colors from 'vuetify/es5/util/colors'

export default {
  ssr:false,
  loading:false,
  head: {
    titleTemplate: '%s - nuxt-example',
    title: 'nuxt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/App.css'
  ],
  plugins: [
    '@/plugins/api.js',
    '@/plugins/highcharts.js',
    '@/plugins/checkAuthenticate.js',
    ///service
    '@/services/auth',
    '@/services/sales',
    ///service
  ],
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://hashtagbime.com/dev/application/test/front-end/'
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
  }
}
