import { env } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['bulma', '~/assets/scss/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          crossorigin: "anonymous"
        }
      ]
    }
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: `https://api.airtable.com/v0/${process.env.PUBLIC_AIRTABLE_BASE_ID}`,
      airbaseApiToken: process.env.PUBLIC_AIRTABLE_TOKEN
    }
  }
})
