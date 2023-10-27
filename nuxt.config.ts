// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/antd.css',
        },
      ],
    },
  },
  components: {
    // Auto-import shared/components defined in `~/shared/components`
    dirs: [
      'shared/components',
    ],
  },
  modules: [
    '@nuxtjs/color-mode',
    // '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@ant-design-vue/nuxt',
    // '@hebilicious/vue-query-nuxt',
  ],
  css: [
    'ant-design-vue/dist/reset.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      },
    },
  },
})
