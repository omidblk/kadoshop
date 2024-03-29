// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js",
          type: "text/javascript",
        },
      ],
      htmlAttrs: { lang: "en" },
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css",
    "@/node_modules/bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/styles/main.scss",
  ],
  modules: [
    '@pinia/nuxt',
    
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    preset: 'node-server'
  }
});
