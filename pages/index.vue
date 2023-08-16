<script setup>
import Hero from '../components/home/Hero.vue'
import Topics from '../components/home/Topics.vue'
import Features from '../components/home/Features.vue'
import ChallengesPreview from '../components/home/ChallengesPreview.vue'
import Stats from '../components/home/Stats.vue';
import YoutubeBanner from '../components/home/YoutubeBanner.vue';
import Testimonials from '../components/home/Testimonials.vue';

useHead({
  title: "Frontenders",
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})

const runtimeConfig = useRuntimeConfig()
const { apiBase, apiToken } = runtimeConfig.public;
const { data } = await useFetch(`${apiBase}/challenges`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const challenges = computed(() => {
  if (data.value !== null) {
    return data.value.records.slice(0, 2);
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

    <Testimonials />

  </div>
</template>

<style scoped></style>