<script setup>
import AppSection from '../AppSection.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';

</script>

<template>
    <AppSection hasHeader centeredTitle :subtitle="'Testimonials'" title="La community che ti aiuta a crescere"
        isTwoContentLayout>
        <template v-slot:leftColumn>
            <img src="testimonials-img.jpg" alt="">
        </template>

        <template v-slot:rightColumn>

            <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
                <SplideSlide>
                    <div class="has-text-left ">
                        <img class="quote mb-6" src="quote.png" alt="quotation symbol">
                        <p class="feedback is-size-5">
                            "Ho apprezzato veramente molto le challenge. Sono state un'importante serie di stimoli ad
                            imparare cose
                            che
                            non avrei facilmente appreso durante l'attivita' lavorativa"
                        </p>

                        <div class="feedback-author mt-4 is-flex is-align-items-center">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                            </figure>
                            <h5 class="has-text-weight-semibold ml-4">Cyber</h5>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div class="has-text-left ">
                        <img class="quote mb-6" src="quote.png" alt="quotation symbol">
                        <p class="feedback is-size-5">
                            "Ho apprezzato veramente molto le challenge. Sono state un'importante serie di stimoli ad
                            imparare cose
                            che
                            non avrei facilmente appreso durante l'attivita' lavorativa"
                        </p>

                        <div class="feedback-author mt-4 is-flex is-align-items-center">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                            </figure>
                            <h5 class="has-text-weight-semibold ml-4">Cyber</h5>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>


        </template>

    </AppSection>
</template>

<style scoped></style>