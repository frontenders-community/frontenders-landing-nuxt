<script setup>
import AppSection from '../AppSection.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import '@splidejs/vue-splide/css/core';

const props = defineProps({
  items: Array,
})

const sliderOptions = {
  type: 'loop',
  arrows: false,
  autoplay: true,
  interval: 3000,
  perPage: 1,
  rewind: true,
  gap: '2rem',
  breakpoints: {
    900: {
      perPage: 1,
      gap: '.7rem',
    },
    480: {
      perPage: 1,
      gap: '.7rem',
    },
  },

}

</script>

<template>
  <AppSection isGradient hasHeader isMinHeight centeredTitle title="Feedback dei nostri membri">
    <template v-slot:content>
      <div class="column is-12 is-two-thirds-desktop">
        <Splide :options="sliderOptions" aria-label="Frontenders feedbacks" class="about-splide">
          <SplideSlide v-for="feedback in items" :key="feedback.fields.user">
            <div class="testimonial-card-box" tabindex="-1" style="width: 100%; display: inline-block;">
              <div class="inner">
                <div class="client-info">
                  <div class="thumbnail">
                    <font-awesome-icon :icon="['far', 'user']" size="2x" color="#535fe1" :mask="['fas', 'circle']" />
                  </div>
                  <div class="content">
                    <h6 class="title">{{ feedback.fields.user }}</h6>
                  </div>
                </div>
                <p class="description has-text-left is-size-5">"{{ feedback.fields.content }}"</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </template>
  </AppSection>
</template>

<style>
.testimonial-card-box .inner {
  background: #fff;
  border-radius: 5px;
  margin-bottom: 40px;
  padding: 30px;
  position: relative;
}

.testimonial-card-box .inner:after {
  border-bottom-right-radius: 4px;
  border-left: 27px solid #fff;
  border-top: 33px solid transparent;
  content: "";
  position: absolute;
  top: calc(99% - 1px);
  left: 10%;
  transform: rotate(90deg);
}

.testimonial-card-box .inner .client-info {
  align-items: center;
  display: flex;
  margin-bottom: 22px;
}

.testimonial-card-box .inner .client-info .thumbnail {
  margin-right: 15px;
}

.testimonial-card-box .inner .client-info .thumbnail img {
  border-radius: 3px;
  height: 55px;
  max-height: 55px;
  object-fit: cover;
}

.testimonial-card-box .inner .client-info .content .title {
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 1px;
}

.testimonial-card-box .inner .description {
  margin-bottom: 22px;
}
.thumbnail {
  background-color: var(--grey-light);
  width: 48px;
  height: 48px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>