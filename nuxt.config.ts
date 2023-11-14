export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxthq/studio'
  ],
  
  nitro: {
    prerender: {
      failOnError: false,
    }
  },
  content: {
    highlight: {
      preload: ['python']
    }
  }
})
