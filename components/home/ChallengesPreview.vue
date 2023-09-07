<script setup>
import ChallengeCard from '../ChallengeCard.vue';
import AppSection from '../AppSection.vue';

const props = defineProps({
  items: Array,
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
      <NuxtLink to="/challenges?topic=all" class="cta button is-medium">
        <span>Scopri tutte le challenge</span>
        <span class="icon is-small">
          <font-awesome-icon
            class="icon"
            :icon="['fas', 'chevron-right']"
          />
        </span>
      </NuxtLink>
    </template>
  </AppSection>
</template>

<style scoped>

</style>