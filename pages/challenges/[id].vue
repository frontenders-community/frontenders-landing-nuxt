<script setup>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { marked } from 'marked';

const route = useRoute();
const slug = route.params.id;

useHead({
  title: `Frontenders - ${slug}`,
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})

const runtimeConfig = useRuntimeConfig()
const apiBase = runtimeConfig.public.apiBase;

const state = reactive({
  challenge: null,
});

function getImage() {
  return `${apiBase}${state.challenge.attributes.img.data.attributes.formats.medium.url}`
}

function getTopics() {
  return state.challenge.attributes.topics.data.map(item => item.attributes.name);
}

onMounted(async () => {
  try {
    const response = await fetch(`${apiBase}/api/challenges?filters[slug][$eq]=${slug}&populate=*`);
    if (response.ok) {
      const result = await response.json();
      state.challenge = result.data[0];
    } else {
      throw new Error(`Error: status ${response.status}`);
    }
  } catch(err) {
    throw new Error(`Error: failed to fetch`);
  } 
})
</script>

<template>
  <div>
    <section class="jumbotron jumbotron-bg section" v-if="state.challenge">
      <p class="title is-2">
        Challenge: {{ state.challenge.attributes.title }}
      </p>
      <p class="subtitle is-4">
        Tutti i dettagli
      </p>
    </section>

    <section class="section" v-if="state.challenge">
      <div class="columns is-centered">
        <div class="column is-12-tablet is-8-desktop image-wrapper">
          <img :src="getImage()" alt="">
        </div>
      </div>
      <hr>
      <div class="level tag is-large">{{ state.challenge.attributes.level }}</div>
      <h2 class="title is-2">{{ state.challenge.attributes.title }}</h2>
      <h4 class="subtitle is-4">{{ state.challenge.attributes.description }}</h4>
      <div class="tags">
        <div class="topic tag is-large is-rounded" v-for="topic in getTopics()">{{ topic }}</div>
      </div>
      <hr>
      <p class="content is-size-5" v-html="marked(state.challenge.attributes.content)"></p>
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
