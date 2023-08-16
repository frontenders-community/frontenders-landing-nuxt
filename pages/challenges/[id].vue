<script setup>
import { useRoute } from 'vue-router';
import { marked } from 'marked';

useHead({
  title: `Frontenders`,
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})

const route = useRoute();
const slug = route.params.id;

const runtimeConfig = useRuntimeConfig()
const { apiBase, apiToken } = runtimeConfig.public;

const { data } = await useFetch(`${apiBase}/challenges?filterByFormula=slug%3D%22${slug}%22`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const challenge = computed(() => {
  return data?.value.records[0];
})

const getImage = () => {
  if (challenge.value && challenge.value.fields.img[0]) {
    return challenge.value.fields.img[0].thumbnails.full.url;
  } else {
    return ``;
  }
}
</script>

<template>
  <div>
    <section
      v-if="challenge"
      class="jumbotron jumbotron-bg section"
    >
      <p class="title is-2">
        Challenge: {{ challenge.fields.title }}
      </p>
      <p class="subtitle is-4">
        Tutti i dettagli
      </p>
    </section>

    <section
      v-if="challenge"
      class="section"
    >
      <div class="columns is-centered">
        <div class="column is-12-tablet is-8-desktop image-wrapper">
          <img :src="getImage()" :alt="challenge.fields.title">
        </div>
      </div>
      <hr>
      <div class="level tag is-large">{{ challenge.fields.level }}</div>
      <h2 class="title is-2">{{ challenge.fields.title }}</h2>
      <h4 class="subtitle is-4">{{ challenge.fields.description }}</h4>
      <div class="tags">
        <div
          v-for="topic in challenge.fields.lookupTopics"
          :key="topic"
          class="topic tag is-large is-rounded"
        >
          {{ topic }}
        </div>
      </div>
      <hr>
      <div class="content is-size-5" v-html="marked(challenge.fields.content)"></div>
    </section>
  </div>
</template>

<style scoped>
.jumbotron {
  margin-top: 96px;
}

.image-wrapper {
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.image-wrapper::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .1);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.topic {
  background-color: var(--secondary);
  border: 3px solid transparent;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
}

.level {
  background-color: var(--primary);
  border: 3px solid transparent;
  color: #333;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
}
</style>
