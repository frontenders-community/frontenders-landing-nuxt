<script setup>
import Testimonials from '../components/about/Testimonials.vue';
import Description from '../components/about/Description.vue'
import Instructors from '../components/about/Instructors.vue'


const runtimeConfig = useRuntimeConfig()
const { apiBase, apiToken, publicUrl } = runtimeConfig.public;

useSeoMeta({
  lang: "IT",
  title: "Frontenders - Chi siamo",
  ogTitle: "Frontenders - Chi siamo",
  description: "La community dedicata al frontend con challenge pazzesche",
  ogDescription: "La community dedicata al frontend con challenge pazzesche",
  icon: `${publicUrl}/favicon.ico`,
  ogImage: `${publicUrl}/favicon.ico`,
})

const { data: apiFeedbacks } = await useFetch(`${apiBase}/feedbacks`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const { data: apiAuthors } = await useFetch(`${apiBase}/authors`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
})

const feedbacks = computed(() => {
  if (apiFeedbacks.value !== null) {
    return apiFeedbacks.value.records;
  }
  return [];
})

const authors = computed(() => {
  if (apiAuthors.value !== null) {
    return apiAuthors.value.records;
  }
  return [];
})
</script>

<template>
  <div>
    <AppBanner title="Hello, Frontender" subtitle="ecco perchè abbiamo deciso di creare una community" />

    <Description />

    <Instructors :authors="authors"/>

    <Testimonials :items="feedbacks" />
  </div>
</template>

<style scoped></style>
