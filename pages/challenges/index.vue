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
const runtimeConfig = useRuntimeConfig();
const { apiBase, apiToken } = runtimeConfig.public;

const { data: apiChallenges, pending, error } = await useFetch(`${apiBase}/challenges`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const { data: apiTopics } = await useFetch(`${apiBase}/topics`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const activeTopic = ref("Tutti");

const activeChallenges = computed(() => {
  if (apiChallenges.value !== null) {
    if (activeTopic.value === "Tutti") {
      return apiChallenges.value.records;
    } else {
      return apiChallenges.value.records.filter(item => 
        item.fields.topics.filter(topic => 
          topic.id.toLowerCase() === activeTopic.value.toLowerCase()
        ).length > 0
      );
    }
  } else {
    return null;
  }
})

const topics = computed(() => {
  const result = apiTopics.value?.records.map(item =>
  ({
    id: item.id,
    label: item.fields.label,
    value: item.fields.value
  })
  );
  return result;
})

const handleFilter = (newTopic) => {
  topic.value = newTopic;
  updateQueryParams(newTopic);
}

const updateQueryParams = (newTopic) => {
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
    activeTopic.value = queryTopic;
  } else {
    updateQueryParams("Tutti");
  }
})
</script>

<template>
  <section class="section has-text-centered">
    <h1 class="title is-1">Le nostre challenge</h1>
    
    <Filters  
      :activeTopic="activeTopic"  
      :topics="topics"  
      @filter="handleFilter"
    />
    <ChallengeList
      :items="activeChallenges"
      :is-loading="pending"
      :is-error="error !== null"
    />
  </section>
</template>

<style scoped>
.section {
  margin-top: 96px;
}
</style>
