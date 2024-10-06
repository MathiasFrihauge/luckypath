export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Luckypath',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // Preconnect to Google Fonts
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      // Manrope Font
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap' },
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.svg' }
    ],
  },

  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/klaviyo-api.js' },
    { path: '/api', handler: '~/server-middleware/sendsms-api.js' }
  ],


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'aos/dist/aos.css',
    '~/assets/css/county-dropdown.css',
    '~/assets/css/global.css',
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Configure axios
  axios: {
    baseURL: '/',
  },

  // Add publicRuntimeConfig
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  // Add privateRuntimeConfig
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-country-dropdown-2', 'axios']
  }
}
