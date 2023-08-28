<script setup>
import AppSection from "../AppSection.vue";

const props = defineProps({
    authors: Array,
})

</script>

<template>
    <AppSection centeredTitle hasHeader isMinHeight title="I formatori (cioè noi)" subtitle="hello, world">
        <template v-slot:content>
            <div class="column is-3 is-flex is-flex-direction-column is-align-items-center" v-for="author in authors"
                :key="author.id">
                <figure class="image is-128x128">
                    <img class="is-rounded" :src="author.fields.avatarImg[0].url"
                        :alt="`${author.fields.name} ${author.fields.surname}`">
                </figure>
                <p class="mt-4 title is-4">{{ author.fields.name }} {{ author.fields.surname }}</p>
                <p class="subtitle is-5">{{ author.fields.description }}</p>
                <ul class="is-flex">
                    <li class="mx-1">
                        <a target="_blank" :href="author.fields.instagramUrl">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
                        </a>
                    </li>
                    <li class="mx-1">
                        <a target="_blank" :href="author.fields.linkedinUrl">
                            <font-awesome-icon :icon="['fab', 'linkedin']" size="lg"/>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Avatar wannabe -->
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