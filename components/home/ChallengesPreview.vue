<script setup>
import ChallengeCard from '../ChallengeCard.vue';
import AppSection from '../AppSection.vue';
import { computed } from 'vue';

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase;
const { data } = await useFetch(`${apiBase}/api/challenges?populate=*`);

const items = computed(() => {
  if (data.value !== null) {
    return data.value.data.slice(0, 2);
  }
  return [];
})
</script>

<template>
  <AppSection
    centeredTitle
    hasHeader
    title="Mettiti alla prova"
    subtitle="Challenges"
  >
    <template v-slot:content>
      <div
        class="column is-5 is-one-third-desktop is-one-quarter-fullhd"
        v-for="item in items"
        :key="item.id"
      >
        <ChallengeCard :item="item" />
      </div>
    </template>

    <template v-slot:cta>
      <NuxtLink to="/challenges" class="cta button is-large">
        <span>Scopri tutte le challenge</span>
        <span class="icon is-small">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </NuxtLink>
    </template>
  </AppSection>
</template>

<style scoped>

</style>