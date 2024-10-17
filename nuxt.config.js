export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Luckypath',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://static.klaviyo.com/onsite/js/V46vbd/klaviyo.js',
        type: 'text/javascript',
        async: true
      }
    ],
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
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' }
    ],
  },
  serverMiddleware: [
    { path: '/api', handler: '~/server-middleware/klaviyo-api.js' },
    { path: '/api', handler: '~/server-middleware/sendsms-api.js' },
    { path: '/api', handler: '~/server-middleware/storesms-api.js' }
  ],
  server: {
    host: "0.0.0.0"
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'aos/dist/aos.css',
    '~/assets/css/county-dropdown.css',
    '~/assets/css/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/firebase.js', mode: 'client' },
    // { src: '~/plugins/register-sw.client.js', mode: 'client' }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'Luckypath Webs Application',
      short_name: 'Luckypath',
      lang: 'en',
      display: 'standalone',
    },
    workbox: {
      importScripts: [
        '/firebase-messaging-sw.js'
      ],
      // debug: false, // Disable debug mode
      // config: {
      //   debug: false // Disable debug mode in Workbox itself
      // },
      dev: process.env.NODE_ENV === 'development',
      offline: true, // Enable offline support
      // runtimeCaching: [
      //   {
      //     urlPattern: '/_nuxt/.*',
      //     handler: 'CacheFirst',
      //     method: 'GET',
      //     strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      //   },
      //   {
      //     urlPattern: '/',
      //     handler: 'NetworkFirst',
      //     method: 'GET',
      //     strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      //   }
      // ]
    }
  },
  env: {
    firebaseConfig: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      vapidKey: process.env.FIREBASE_VAPID_KEY
    }
  },
  // Configure axios
  axios: {
  baseURL: '/'

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
    transpile: ['vue-country-dropdown-2', 'axios'],
    // terser: {
    //   terserOptions: {
    //     compress: {
    //       drop_console: true // Remove console.* statements
    //     }
    //   }
    // }
  }
}
