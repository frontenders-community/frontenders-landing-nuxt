<script setup>
import { computed } from "vue";

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase;
const apiToken = runtimeConfig.public.airbaseApiToken;

const props = defineProps({
  activeTopic: String
})
const emit = defineEmits(['filter']);
const { data } = await useFetch(`${apiBase}/filters`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});



function handleClick(topic) {
  emit('filter', topic);
}

const topics = computed(() => {
  const result = data.value && data.value.records && data.value.records.map(item =>
  ({
    label: item.fields.label,
    value: item.fields.value
  })
  );
  return result;
})
</script>

<template>
  <div class="topics tags is-flex is-justify-content-center">
    <div class="topic tag is-large is-rounded" :class="{ active: activeTopic === 'Tutti' }" @click="handleClick('Tutti')">
      Tutti
    </div>
    <div v-if="topics" v-for="topic in topics" :key="topic.value" class="topic tag is-large is-rounded"
      :class="{ active: activeTopic === topic.label }" @click="handleClick(topic.label)">
      {{ topic.label }}
    </div>
  </div>
</template>

<style scoped>
.topics {
  margin: 20px 0 40px 0;
}

.topic {
  background-color: transparent;
  border: 3px solid var(--secondary);
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
}

.topic:hover {
  background-color: var(--secondary);
  border: 3px solid transparent;
  color: #fff;
}

.active {
  background-color: var(--secondary);
  border: 3px solid transparent;
  color: #fff;
}
</style>