<script setup>
import { computed, onMounted, ref } from 'vue';
import ChallengeList from '../../components/challenges/ChallengeList.vue'
import Filters from '../../components/challenges/Filters.vue'

const LEVELS = {
  default: Infinity,
  beginner: 1,
  intermediate: 2,
  advanced: 3,
}

const router = useRouter();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { apiBase, apiToken, publicUrl } = runtimeConfig.public;

useSeoMeta({
  lang: "IT",
  title: "Frontenders - Le challenge",
  ogTitle: "Frontenders - Le challenge",
  description: "La community dedicata al frontend con challenge pazzesche",
  ogDescription: "La community dedicata al frontend con challenge pazzesche",
  icon: `${publicUrl}/favicon.ico`,
  ogImage: `${publicUrl}/favicon.ico`,
})

const { data: apiChallenges, pending, error } = await useFetch(`${apiBase}/challenges?filterByFormula=state%3D%22published%22&sort%5B0%5D%5Bfield%5D=order&sort%5B0%5D%5Bdirection%5D=desc`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const { data: apiTopics } = await useFetch(`${apiBase}/topics`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const state = reactive({
  activeTopic: "all",
  activeLevel: "normal",
})

const activeChallenges = computed(() => {
  let newItems = [];

  if (apiChallenges.value === null) {
    newItems = [];
  } else {
    if (state.activeTopic === "all") {
      newItems = apiChallenges.value.records;
    } else {
      newItems = apiChallenges.value.records.filter(item => {
        return item.fields.topics.find(topicId => topicId === activeTopicId.value);
      });
    }

    if (state.activeLevel !== "normal") {
      newItems = newItems.sort((a, b) => {
        const levelA = a.fields.level.toLowerCase();
        const levelB = b.fields.level.toLowerCase();
        if (state.activeLevel === "beginner") {
          return (LEVELS[levelA] || LEVELS.default) - (LEVELS[levelB] || LEVELS.default);
        } else if (state.activeLevel === "advanced") {
          return (LEVELS[levelB] || LEVELS.default) - (LEVELS[levelA] || LEVELS.default);
        } else {
          return Math.random() - 0.5;
        }
      });
    }
  }

  return newItems;
})

const topics = computed(() => {
  return apiTopics.value?.records.map(item => ({
    id: item.id,
    label: item.fields.label,
    value: item.fields.value
  }));
})

const activeTopicId = computed(() => {
  if (state.activeTopic === 'all') {
    return null;
  }
  return topics.value.find(topic => topic.value === state.activeTopic).id;
})

const handleFilter = (newTopic) => {
  state.activeTopic = newTopic;
  updateQueryParams(newTopic);
}

const handleLevel = (newLevel) => {
  state.activeLevel = newLevel;
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
    state.activeTopic = queryTopic;
  } else {
    updateQueryParams("all");
  }
})
</script>

<template>
  <AppSection centeredTitle hasHeader title="Le nostre challenge" subtitle="Affila la tastiera">
    <template v-slot:content>
      <div class="column is-12">
        <Filters
          :activeTopic="state.activeTopic"
          :topics="topics"
          @filter="handleFilter"
          @level="handleLevel"
        />
      </div>
      <div class="column is-12">
        <ChallengeList
          :items="activeChallenges"
          :is-loading="pending"
          :is-error="error !== null"
        />
      </div>
    </template>
  </AppSection>
</template>

<style scoped>
.section {
  margin-top: 96px;
}
</style>
