// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          htmlAttrs: { lang: "en" },
        },
      },
      css: [
            "@/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css",
            "@/node_modules/bootstrap-icons/font/bootstrap-icons.css",
            "@/assets/styles/main.scss"
            ],
      vite: {
        css: {
          
        },
      },
     

  })
