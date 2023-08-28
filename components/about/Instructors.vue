<script setup>
import AppSection from "../AppSection.vue";

</script>

<template>
    <AppSection centeredTitle hasHeader isMinHeight title="I formatori (cioè noi)" subtitle="hello, world">
        <template v-slot:content>
            <div class="column is-3 is-flex is-flex-direction-column is-align-items-center">
                <figure class="image is-128x128">
                    <img class="is-rounded" src="/adriano.jpeg" alt="Adriano Grimaldi">
                </figure>
                <p class="mt-4 title is-4">Adriano Grimaldi</p>
                <p class="subtitle is-5">FullStack Web Developer</p>
            </div>
            <div class="column is-3 is-flex is-flex-direction-column is-align-items-center">
                <figure class="image is-128x128">
                    <img class="is-rounded" src="/olga.jpeg" alt="Olga Demina">
                </figure>
                <p class="mt-4 title is-4">Olga Demina</p>
                <p class="subtitle is-5">FullStack Web Developer</p>
            </div>
            <div class="column is-3 is-flex is-flex-direction-column is-align-items-center">
                <div class="teacher-avatar">
                    <font-awesome-icon :icon="['far', 'user']" size="4x" color="#535fe1" :mask="['fas', 'circle']" />
                </div>
                <p class="mt-4 title is-4">Vorresti essere qui?</p>
                <p class="subtitle is-5">Scrivici per diventare formatore Fronteders</p>
            </div>
        </template>
    </AppSection>
</template>

<style scoped>
.teacher-avatar {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-light);
}
</style>