<script setup>
import Hero from '../components/home/Hero.vue'
import Topics from '../components/home/Topics.vue'
import Features from '../components/home/Features.vue'
import ChallengesPreview from '../components/home/ChallengesPreview.vue'
import Stats from '../components/home/Stats.vue';
import YoutubeBanner from '../components/home/YoutubeBanner.vue';
import Testimonials from '../components/home/Testimonials.vue';

const runtimeConfig = useRuntimeConfig()
const { apiBase, apiToken, publicUrl } = runtimeConfig.public;

useSeoMeta({
  lang: "IT",
  title: "Frontenders",
  ogTitle: "Frontenders",
  description: "La community dedicata al frontend con challenge pazzesche",
  ogDescription: "La community dedicata al frontend con challenge pazzesche",
  icon: `${publicUrl}/favicon.ico`,
  ogImage: `${publicUrl}/favicon.ico`,
})


const { data: apiChallenges } = useFetch(`${apiBase}/challenges`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});
const { data: apiFeedbacks } = useFetch(`${apiBase}/feedbacks`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const challenges = computed(() => {
  if (apiChallenges.value !== null) {
    return apiChallenges.value.records.slice(0, 2);
  }
  return [];
})

const feedbacks = computed(() => {
  if (apiFeedbacks.value !== null) {
    return apiFeedbacks.value.records.slice(0, 2);
  }
  return [];
})
</script>

<template>
  <div>
    <Hero />

    <Topics />

    <Features />

    <ChallengesPreview :items="challenges" />

    <Stats />

    <YoutubeBanner />

    <Testimonials :items="feedbacks" />
  </div>
</template>

<style scoped></style>