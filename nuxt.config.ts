// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          htmlAttrs: { lang: "en" },
        },
      },
      css: ["@/assets/styles/main.sass",
            "@/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css",
            ],
      vite: {
        css: {
          preprocessorOptions: {
            sass: {
              additionalData: '@import "@/assets/styles/_variables.sass"',
            },
          },
        },
      },
  })
