export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/scss/main.scss",
    "bulma",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      apiBase: `https://api.airtable.com/v0/${process.env.PUBLIC_API_BASE_ID}`,
      apiToken: process.env.PUBLIC_API_TOKEN,
      publicUrl: process.env.PUBLIC_URL,
    },
  },
  modules: [
    "@nuxt/image",
    "nuxt-simple-sitemap",
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "/",
      },
    ],
  ],
});
