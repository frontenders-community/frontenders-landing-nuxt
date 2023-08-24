<script setup>
import AppSection from '../AppSection.vue';
</script>

<template>
  <AppSection
    isAlternate
    isTwoContentLayout
  >
    <template v-slot:leftColumn>
      <h6 class="section-subtitle subtitle is-6 is-uppercase">youtube</h6>
      <h2 class="title is-1">Scopri le nostre sessioni di studio</h2>

      <a href="https://www.youtube.com/@frontenderscommunity/featured" target="_blank" class="mt-4 cta button is-medium">
        <span>Iscriviti al canale</span>
        <span class="icon is-small">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </a>
    </template>
    <template v-slot:rightColumn>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ig0fQWfLMZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </template>
  </AppSection>
</template>

<style scoped>
iframe {
  max-width: 100%;
}

</style>