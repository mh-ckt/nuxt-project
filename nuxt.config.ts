// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    [
      'mh-my-module',
      {
        enabled: true,
        someOption: 'user-value' // 覆盖默认值
      }
    ],
  ],
  css: [
    '@/assets/styles/main.css',
  ],
  myModule: { // 这个键名对应模块 meta 中的 `configKey`
    enabled: false,
    someOption: 'user-value' // 覆盖默认值
  },
})
