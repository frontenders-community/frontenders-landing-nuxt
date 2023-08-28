<script setup>
import Testimonials from '../components/about/Testimonials.vue';
import Description from '../components/about/Description.vue'
import Instructors from '../components/about/Instructors.vue'


useHead({
  title: "Frontenders - Chi siamo",
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})

const runtimeConfig = useRuntimeConfig()
const { apiBase, apiToken } = runtimeConfig.public;

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
    <AppBanner title="Hello, Frontenders" subtitle="ecco perchè abbiamo deciso di creare una community" />

    <Description />

    <Instructors :authors="authors"/>

    <Testimonials :items="feedbacks" />
  </div>
</template>

<style scoped></style>
