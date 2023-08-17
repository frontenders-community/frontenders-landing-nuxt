<script setup>
const props = defineProps({
  item: Object
})

const getPreviewImg = () => {
  if (props.item && props.item.fields.previewImg) {
    return props.item.fields.previewImg[0].thumbnails.large.url;
  } else {
    return ``;
  }
}
</script>

<template>
  <div class="card">
    <div class="card-image" v-if="item">
      <figure class="image is-4by3">
        <div class="badge-level tag is-medium">{{ item.fields.level }}</div>
        <img :src="getPreviewImg()" :alt="item.fields.title">
      </figure>
    </div>
    <div class="card-content" v-if="item">
      <div class="media">
        <div class="media-content">
          <div class="level">
            <div class="level-left">
              <router-link :to="`/challenges/${item.fields.slug}`" class="title is-4">
                {{ item.fields.title }}
              </router-link>
            </div>
            <div class="level-right">
              <a :href="item.fields.githubUrl" target="_blank" class="button is-dark is-outlined">
                <span class="icon is-small">
                  <i class="fa-brands fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <p>{{ item.fields.description }}</p>
        <div class="tags mt-2">
          <div
            v-for="topic in item.fields.lookupTopics"
            :key="topic"
            class="topic tag is-medium is-uppercase"
          >
            {{ topic }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
  box-shadow: inset 0px -20px 0px 0px rgba(83,95,225,0.9);
  border: 2px solid var(--secondary);
  border-radius: 2rem;
  cursor: pointer;
}

.card,
figure {
  overflow: hidden;
}

.card img {
  transition: .3s;
}

.card:hover img {
  scale: 1.1;
}

figure {
  position: relative;
}

figure .tag {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 9;
}

a.title {
  text-decoration: underline;
  transition: .5s;
}

.content {
  margin-bottom: 20px;
}

.content p {
  text-align: left;
  height: 120px;
  font-size: 1.2rem;
}

a.title:hover {
  color: var(--secondary);
}

.topic {
  background-color: var(--secondary);
  color: #fff;
}

.badge-level {
  background-color: var(--primary);
  color: #333;
  font-weight: 700;
  font-size: 1.2rem !important;
  border-top-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
}
</style>