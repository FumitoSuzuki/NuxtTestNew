const config = require("./.environment.json");

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: process.env.NUXT_REND_TARGET || config.NUXT_REND_TARGET,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NuxtTestNew',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: "~/assets/scss/bootstrap.scss", lang: "scss" },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/bootstrap-icons" },
    { src: "~/plugins/contentful" },
    { src: "~/plugins/prism" },
    { src: "~/plugins/vee-validate" },
    { src: "~/plugins/window" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/atoms', prefix: 'atom' },
    { path: '~/components/molecules', prefix: 'molecule' },
    { path: '~/components/organisms', prefix: 'organism' },
    { path: '~/components/templates', prefix: 'template' }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ["bootstrap-vue/nuxt", { css: false, bvCSS: false }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/markdown-it/markdown-it
    "@nuxtjs/markdownit",
    // https://www.npmjs.com/package/nuxt-basic-auth-module
    "nuxt-basic-auth-module",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || undefined
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // basic configuration (https://www.npmjs.com/package/nuxt-basic-auth-module)
  basic: {
    name: process.env.BASIC_USER,
    pass: process.env.BASIC_PASS,
    enabled: new Boolean(process.env.BASIC_PASS)
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    transpile: ["vee-validate/dist/rules"],
    babel: { compact: true },
    extend(config, ctx) {},
  },

  env: {
    NODE_ENV: process.env.NODE_ENV || config.NODE_ENV,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN:
      process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN,
    CTF_PRE_ACCESS_TOKEN:
      process.env.CTF_PRE_ACCESS_TOKEN || config.CTF_PRE_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID || config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID:
      process.env.CTF_BLOG_POST_TYPE_ID || config.CTF_BLOG_POST_TYPE_ID
  },
}
