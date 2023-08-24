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
    isTwoContentLayout>
    <template v-slot:leftColumn>
      <img src="testimonials-img.jpg" alt="">
    </template>

    <template v-slot:rightColumn>
      <Splide v-if="items" :options="sliderOptions" aria-label="Frontenders feedbacks" class="home-splide">
        <SplideSlide v-for="feedback in items" :key="feedback.fields.user">
          <div class="has-text-left ">
            <img class="quote mb-6" src="quote.png" alt="quotation symbol">
            <p class="feedback is-size-5">
              {{ feedback.fields.content }}
            </p>

            <div class="feedback-author mt-4 is-flex is-align-items-center">
              <figure class="image is-48x48">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
              <h5 class="has-text-weight-semibold ml-4">{{ feedback.fields.user }}</h5>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </template>
  </AppSection>
</template>

<style>
.home-splide .splide__pagination {
  bottom: -2.5rem;
}

.home-splide .splide__pagination__page {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 10px;
}

.home-splide .splide__pagination__page::before {
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


.home-splide .splide__pagination__page:hover {
  background-color: var(--primary);
}

.home-splide.splide.is-focus-in .splide__pagination__page:focus {
  outline: 0;
}

.home-splide .splide__pagination__page.is-active {
  background: var(--secondary-light);
  transform: scale(1.2);
}

.home-splide .splide__pagination__page.is-active::before {
  border-color: var(--secondary);
  height: 100%;
  opacity: 1;
  width: 200%;
  height: 200%;
  transform-origin: center;
}
</style>