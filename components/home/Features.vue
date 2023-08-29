<script setup>
import AppSection from '../AppSection.vue';

const features = [
  {
    icon: "features-icon-1.png.webp",
    text: "Insieme si cresce di più",
    description: "Studiare insieme a qualcuno che ha le nostre stesse difficoltà è un grande vantaggio!",
  },
  {
    icon: "features-icon-2.png.webp",
    text: "Casi d'uso reali",
    description: "Le nostre challenge sono vere webapp, come quelli che potresti sviluppare a lavoro. Portati in vantaggio!",
  },
  {
    icon: "features-icon-3.png.webp",
    text: "Confrontati con altri sviluppatori",
    description: "Condividi le tue soluzioni, spiegale ad altri sviluppatori e raccogli suggerimenti: impara dagli altri!",
  },
]
</script>

<template>
  <AppSection
    isAlternate
    isTwoContentLayout
    isMinHeight
  >
    <template v-slot:leftColumn>
      <nuxt-img
        format="webp"
        sizes="sm:100vw md:100vw lg:50vw"
        loading="lazy"
        src="about-img1.png.webp"
        alt="Un gruppo di persone seduti che parlano tra di loro"
      />
    </template>
    <template v-slot:rightColumn>
      <h6 class="section-subtitle subtitle is-6 is-uppercase">Chi siamo</h6>
      <h2 class="title is-1">Perchè unirsi a noi</h2>

      <article
        v-for="feature in features"
        :key="feature.text"
        class="mb-4 media"
      >
        <figure class="media-left">
          <span class="about-icon">
            <nuxt-img
              format="webp"
              width="50"
              height="50"
              loading="lazy"
              :src="feature.icon"
              :alt="feature.text"
            />
          </span>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <span>{{ feature.text }}</span>
              <br>
              {{ feature.description }}
            </p>
          </div>
        </div>
      </article>

      <NuxtLink to="/about" class="mt-4 cta button is-medium">
        <span>Scopri chi siamo</span>
        <span class="icon is-small">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </NuxtLink>
    </template>
  </AppSection>
</template>

<style scoped>
.about-icon {
  display: inline-block;
  width: 50px;
}
.about-icon img {
  width: 100%;
}
.media {
  align-items: center;
}
.content span {
  font-weight: 700;
  font-size: 1.6rem;
}
.content p {
  font-size: 1.2rem;
}
</style>