<script setup>
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
</script>

<template>
  <AppBanner title="Hello, Frontenders" subtitle="ecco perchè abbiamo deciso di creare una community" />

  <Description />

  <Instructors />
</template>

<style scoped></style>
