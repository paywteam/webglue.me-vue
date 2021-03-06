/**
 * @type {import("@nuxt/types").Configuration}
 */
const config = {
  // Custom global id of html dom
  globalName: 'webglue',

  mode: 'universal',

  // Global head
  head: {
    title: 'webglue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
  },

  // Source directory
  srcDir: 'src/',

  css: ['~/assets/stylus/spring.styl'],

  // Router config
  router: {
    // Custom link class names
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },

  // Custom build path name
  build: {
    publicPath: '/dist/'
  },

  // Build modules
  buildModules: ['@nuxtjs/eslint-module'],

  plugins: ['~/plugins/init.js'],

  serverMiddleware: [
    // API middleware
    '~/server/index.js'
  ]
}

module.exports = config
