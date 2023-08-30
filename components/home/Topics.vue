<script setup>
import AppSection from '../AppSection.vue';

const topics = [
  {
    prefix: 'fab',
    icon: "html5",
    name: "HTML",
    description: "Semantica, tag e attributi non saranno più un mistero"
  },
  {
    prefix: 'fab',
    icon: "css3",
    name: "CSS",
    description: "Da display a flex, fino a grid e animazioni, un viaggio con stile"
  },
  {
    prefix: 'fab',
    icon: "js",
    name: "JS",
    description: "Manipolazione del DOM, gestione dei dati, interazione utente. Sky is the limit."
  },
  {
    prefix: 'fab',
    icon: "vuejs",
    name: "Vue",
    description: "Semplice, intuitivo e indie. Questo sito web utilizza Vue!"
  },
  {
    prefix: 'fab',
    icon: "react",
    name: "React",
    description: "Framework di casa Meta: richiede tanto studio, ma ci siamo noi!"
  },
  {
    prefix: 'fas',
    icon: "cube",
    name: "3D e oltre",
    description: "Animazioni 2D, 3D e videogame: non ci ferma nulla!"
  },
]

const hoverIndex = ref(null);

const setHoverIndex = (index) => {
  hoverIndex.value = index
}
</script>

<template>
  <AppSection centeredTitle hasHeader isMinHeight title="Main Topics" subtitle="La roadmap Frontend">
    <template v-slot:content>
      <div v-for="(topic, index) in topics" :key="topic.name" class="column is-4">
        <div class="box has-text-left" @mouseover="setHoverIndex(index)" @mouseleave="setHoverIndex(null)">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large">
                <font-awesome-icon
                  class="icon"
                  :icon="[topic.prefix, topic.icon]"
                  size="3x"
                  :color="hoverIndex === index ? '#fff' :'#535fe1'"
                />
              </span>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <span>{{ topic.name }}</span>
                  <br>
                  {{ topic.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </template>
  </AppSection>
</template>

<style scoped>
.box {
  background-color: var(--grey-light);
  transition: 1s;
  box-shadow: none;
  cursor: pointer;
}

.box:hover {
  background-color: var(--secondary);
}

.box:hover .content {
  color: #fff;
}

.content {
  height: 80px;
  overflow-y: scroll;
}

.content span {
  font-weight: 700;
  font-size: 1.2rem;
}

.media {
  align-items: center;
}
</style>