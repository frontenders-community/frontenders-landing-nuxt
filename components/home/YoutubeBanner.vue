<script setup>
import AppSection from '../AppSection.vue';
</script>

<template>
  <AppSection
    isAlternate
    isTwoContentLayout
    is-min-height
    classes="section-arrow"
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ig0fQWfLMZo&autoplay=1"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Ig0fQWfLMZo?autoplay=1><img src=https://img.youtube.com/vi/Ig0fQWfLMZo/hqdefault.jpg alt='Sessione di studio di Frontenders'><span>▶</span></a>"
        title="Sessione di studio di Frontenders"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </AppSection>
</template>

<style scoped>
iframe {
  max-width: 100%;
}

</style>