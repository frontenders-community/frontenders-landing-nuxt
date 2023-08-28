<script setup>
import AppSection from '../AppSection.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';
// or only core styles
import '@splidejs/vue-splide/css/core';

const props = defineProps({
  items: Array,
})

const sliderOptions = {
  type: 'loop',
  arrows: false,
  autoplay: true,
  interval: 3000
}
</script>

<template>
  <AppSection hasHeader centeredTitle :subtitle="'Testimonials'" title="La community che ti aiuta a crescere"
    isTwoContentLayout isMinHeight>
    <template v-slot:leftColumn>
      <nuxt-img format="webp" loading="lazy" src="testimonials-img.jpg" alt="Una ragazza seduta davanti al computer" />
    </template>

    <template v-slot:rightColumn>
      <Splide v-if="items" :options="sliderOptions" aria-label="Frontenders feedbacks" class="home-splide">
        <SplideSlide v-for="feedback in items" :key="feedback.fields.user">
          <div class="has-text-left ">
            <nuxt-img format="webp" loading="lazy" class="quote mb-6" src="quote.png" alt="quotation symbol" />
            <p class="feedback is-size-5">
              {{ feedback.fields.content }}
            </p>

            <div class="feedback-author mt-4 is-flex is-align-items-center">
              <div class="feedback-avatar">
                <font-awesome-icon :icon="['far', 'user']" size="2x" color="#535fe1" :mask="['fas', 'circle']" />
              </div>
              <h5 class="has-text-weight-semibold ml-4">{{ feedback.fields.user }}</h5>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </template>
  </AppSection>
</template>

<style>
.splide {
  padding: 40px 0;
}

.splide__pagination {
  bottom: 0rem;
}

.splide__pagination__page {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 10px;
}

.splide__pagination__page::before {
  border: 2px solid transparent;
  border-radius: 100%;
  content: "";
  height: 0;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: .3s;
  width: 0;
}

.splide:not(.is-overflow) .splide__pagination {
  display: unset;
}

.splide__pagination__page:hover {
  background-color: var(--primary);
}

.splide.is-focus-in .splide__pagination__page:focus {
  outline: 0;
}

.splide__pagination__page.is-active {
  background: var(--secondary-light);
  transform: scale(1.2);
}

.splide__pagination__page.is-active::before {
  border-color: var(--secondary);
  height: 100%;
  opacity: 1;
  width: 200%;
  height: 200%;
  transform-origin: center;
}
</style>