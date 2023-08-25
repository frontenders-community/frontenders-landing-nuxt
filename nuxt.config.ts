export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "bulma"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      apiBase: `https://api.airtable.com/v0/${process.env.PUBLIC_API_BASE_ID}`,
      apiToken: process.env.PUBLIC_API_TOKEN,
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
