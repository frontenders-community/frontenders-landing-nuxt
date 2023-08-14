<script setup>
import Hero from '../components/home/Hero.vue'
import Topics from '../components/home/Topics.vue'
import Features from '../components/home/Features.vue'
import ChallengesPreview from '../components/home/ChallengesPreview.vue'
import Stats from '../components/home/Stats.vue';
import YoutubeBanner from '../components/home/YoutubeBanner.vue';

useHead({
  title: "Frontenders",
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})
</script>

<template>
  <div>
    <Hero />

    <Topics />

    <Features />

    <ChallengesPreview />

    <Stats />

    <YoutubeBanner />
  </div>
</template>

<style scoped>
</style>