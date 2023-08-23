<script setup>
const props = defineProps({
  topics: Array,
  activeTopic: String
})
const emit = defineEmits(['filter', 'level']);

const handleClick = (topic) => {
  emit('filter', topic);
}

const handleChange = (event) => {
  emit('level', event.target.value);
}
</script>

<template>
  <div class="topics tags is-flex is-justify-content-center">
    <div
      class="topic tag is-large is-rounded"
      :class="{ active: activeTopic === 'all' }"
      @click="handleClick('all')"
    >
      Tutti
    </div>
    <div
      v-if="topics"
      v-for="topic in topics"
      :key="topic.value"
      class="topic tag is-large is-rounded"
      :class="{ active: activeTopic === topic.value }"
      @click="handleClick(topic.value)"
    >
      {{ topic.label }}
    </div>
  </div>
  <div class="select">
    <select @change="handleChange">
      <option selected disabled>Filtro aggiuntivo</option>
      <option value="beginner">Prima quelle facili</option>
      <option value="advanced">Prima quelle difficili</option>
      <option value="default">Fai fare al destino</option>
    </select>
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