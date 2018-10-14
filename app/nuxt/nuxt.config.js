require('dotenv').config()

module.exports = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL || 'http://localhost:3000',
    APP_ENV: process.env.APP_ENV || 'development',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sample Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: ["~/assets/css/main.css"],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    extractCSS: true
  },
  modules: [
    "nuxt-typescript"
  ]
}
