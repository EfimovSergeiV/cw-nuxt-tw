import backend from "./conf"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Главный сварщик: Cварочное оборудование, всё для сварки Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Сварочное оборудование и всё для сварки: Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск' 
      },
      { name: 'format-detection', content: 'telephone=yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  server: {
    port: 3001 // default: 3000
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/low-priorty.pcss',
    'assets/high-priorty.pcss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lodash.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // // Doc: https://github.com/nuxt-community/color-mode-module
    // "@nuxtjs/color-mode",
    // // Doc: https://github.com/nuxt-community/tailwindcss-module
    // "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/universal-storage',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
    injectPosition: 0,
    viewer: true,
    injectPosition: { 
      // 'low-priority' will have lower priority than Tailwind stylesheet, 
      // while 'high-priorty' will override it
      after: 'assets/low-priorty.pcss'
    }
  },

  colorMode: {
    storageKey: 'color-mode',
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  // router: {
  //   scrollBehavior: function (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: backend,
  },

  // https://github.com/nuxt-community/universal-storage-module
  storage: {
    initialState: { 
      cookies: true, 
      // clientName: null  
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Интернет магазин: Главный сварщик',
      short_name: 'Главный сварщик',
      theme_color: '#182130',
      background_color: '#ffffff',
      description:
        'Сварочное оборудование и всё для сварки: Москва, Санкт-Петербург, Псков, Великие Луки, Смоленск, Петрозаводск',
      start_url: 'https://glsvar.ru',
      categories: ['shop'],
    },
  },

  loading: {
    color: 'yellow',
    height: '1px',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
