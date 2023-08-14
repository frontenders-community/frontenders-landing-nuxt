<script setup>
import { computed, onMounted, ref } from 'vue';
import ChallengeList from '../../components/challenges/ChallengeList.vue'
import Filters from '../../components/challenges/Filters.vue'

useHead({
  title: "Frontenders - Le challenge",
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})

const router = useRouter();
const route = useRoute();
const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase;

const { data, pending, error } = await useFetch(`${apiBase}/api/challenges?populate=*`);

const topic = ref("Tutti");

const items = computed(() => {
  if (data.value !== null) {
    if (topic.value === "Tutti") {
      return data.value.data;
    } else {
      return data.value.data.filter(item => 
        item.attributes.topics.data.filter(itemTopic => 
          itemTopic.attributes.name.toLowerCase() === topic.value.toLowerCase()
        ).length > 0
      );
    }
  } else {
    return null;
  }
})

function handleFilter(newTopic) {
  topic.value = newTopic;
  updateQueryParams(newTopic);
}

function updateQueryParams(newTopic) {
  router.push({
    name: 'challenges',
    query: {
      ...route.query,
      topic: newTopic
    }
  })
}

onMounted(() => {
  const queryTopic = route.query.topic;
  if (queryTopic) {
    topic.value = queryTopic;
  } else {
    updateQueryParams("Tutti");
  }
})
</script>

<template>
  <section class="section has-text-centered">
    <h1 class="title is-1">Le nostre challenge</h1>
    
    <Filters :activeTopic="topic" @filter="handleFilter" />
    <ChallengeList :items="items" :is-loading="pending" :is-error="error !== null" />
  </section>
</template>

<style scoped>
.section {
  margin-top: 96px;
}
</style>
