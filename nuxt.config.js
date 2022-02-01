export default {
  head: {
    title: 'Gawang Diwa',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Gawang Diwa Art is a DTI-registered business with the goal of providing unique hand-made products and visual art commissions combined with fine artistry, quality service, and soulful expression.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: [],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  /**
  buildDir: 'nuxt-dist',
   */
}
