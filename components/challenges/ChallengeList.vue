<script setup>
import ChallengeCard from '../ChallengeCard.vue';

const props = defineProps({
  items: Array,
  isLoading: Boolean,
  isError: Boolean
})

const getResultInfo = () => {
  if (props.items === null) {
    return '';
  }

  return props.items.length === 1 ? 
    `1 risultato` : 
    `${props.items.length} risultati`;
}
</script>

<template>
  <section class="min-height">
    <h4 class="title is-4">{{ getResultInfo() }}</h4>
    <div v-if="items" class="columns is-multiline">
      <div
        v-for="item in items"
        :key="item.id"
        class="column is-6-tablet is-4-desktop is-3-fullhd"
      >
        <ChallengeCard :item="item" />
      </div>
    </div>
    <div v-if="isLoading" class="box">Caricamento...</div>
    <div v-if="isError" class="box">Si è verificato un errore. Riprovare.</div>
  </section>
</template>

<style scoped></style>