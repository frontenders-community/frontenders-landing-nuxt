<script setup>
const props = defineProps({
  topics: Array,
  activeTopic: String
})
const emit = defineEmits(['filter']);

const handleClick = (topic) => {
  emit('filter', topic);
}
</script>

<template>
  <div class="topics tags is-flex is-justify-content-center">
    <div
      class="topic tag is-large is-rounded"
      :class="{ active: activeTopic === 'Tutti' }"
      @click="handleClick('Tutti')"
    >
      Tutti
    </div>
    <div
      v-if="topics"
      v-for="topic in topics"
      :key="topic.value"
      class="topic tag is-large is-rounded"
      :class="{ active: activeTopic === topic.label }"
      @click="handleClick(topic.label)"
    >
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