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
        item.fields.topics.filter(topicId =>
          topicId === activeTopicId.value
        ).length > 0
      );
    }
  } else {
    return null;
  }
})

const activeTopicId = computed(() => {
  return topics.value.filter(topic => topic.label === activeTopic.value)[0].id;
})

const topics = computed(() => {
  return apiTopics.value?.records.map(item => ({
    id: item.id,
    label: item.fields.label,
    value: item.fields.value
  }));
})

const handleFilter = (newTopic) => {
  activeTopic.value = newTopic;
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
  <AppSection centeredTitle hasHeader title="Le nostre challenge" subtitle="Affila la tastiera">
    <template v-slot:content>
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
    </template>
  </AppSection>
</template>

<style scoped>
.section {
  margin-top: 96px;
}
</style>
