<script setup>
import { useRoute } from 'vue-router';
import { marked } from 'marked';

const route = useRoute();
const slug = route.params.id;

const runtimeConfig = useRuntimeConfig()
const { apiBase, apiToken, publicUrl } = runtimeConfig.public;

const { data } = await useFetch(`${apiBase}/challenges?filterByFormula=slug%3D%22${slug}%22`, {
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});

const modalOpen = ref(false);

const challenge = computed(() => {
  return data?.value.records[0];
})


useSeoMeta({
  lang: "IT",
  title: `Frontenders - ${challenge.value.fields.title}`,
  ogTitle: `Frontenders - ${challenge.value.fields.title}`,
  description: "La community dedicata al frontend con challenge pazzesche",
  ogDescription: "La community dedicata al frontend con challenge pazzesche",
  icon: `${publicUrl}/favicon.ico`,
  ogImage: `${publicUrl}/favicon.ico`,
})

const getImage = () => {
  if (challenge.value && challenge.value.fields.img[0]) {
    return challenge.value.fields.img[0].thumbnails.full.url;
  } else {
    return ``;
  }
}

const hasAttachment = () => {
  return challenge.value.fields.attachment.length > 0;
}

const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
}
</script>

<template>
  <div>
    <AppBanner v-if="challenge" :title="`Challenge: ${challenge.fields.title}`" subtitle="Tutti i dettagli" />

    <section v-if="challenge" class="section">
      <div class="columns is-centered">
        <div class="column is-12-tablet is-8-desktop image-wrapper" @click="toggleModal">
          <img :src="getImage()" :alt="challenge.fields.title" />
          <p class="is-size-4 has-font-weight-bold">Clicca per aprire</p>
        </div>
      </div>
      <hr>
      <div class="level tag is-large">{{ challenge.fields.level }}</div>
      <h2 class="title is-2">{{ challenge.fields.title }}</h2>
      <h4 class="subtitle is-4">{{ challenge.fields.description }}</h4>
      <div class="tags">
        <div v-for="topic in challenge.fields.lookupTopics" :key="topic" class="topic tag is-large is-rounded">
          {{ topic }}
        </div>
      </div>
      <hr>
      <div class="content is-size-5" v-html="marked(challenge.fields.content)"></div>
      <template v-if="hasAttachment">
        <button v-for="attachment in challenge.fields.attachment" class="button is-info is-outlined has-text-weight-bold">
          <a :href="attachment.url" target="_blank">Scarica allegato</a>
        </button>
      </template>
    </section>

    <div v-if="modalOpen" class="modal" :class="{ 'is-active': modalOpen }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <img :src="getImage()" :alt="challenge.fields.title">
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleModal"></button>
    </div>
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
  cursor: pointer;
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

.image-wrapper p {
  display: none;
  background-color: #fff;
  color: #333;
  padding: 6px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
}

.image-wrapper:hover p {
  display: block;
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
  border-top-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
  cursor: pointer;
  transition: .3s;
}
</style>
