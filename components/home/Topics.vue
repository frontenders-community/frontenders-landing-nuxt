<script setup>
import AppSection from '../AppSection.vue';

const topics = [
  {
    icon: "html5",
    name: "HTML",
    description: "Semantica, tag e attributi non saranno più un mistero"
  },
  {
    icon: "css3",
    name: "CSS",
    description: "Da display a flex, fino alle grid, un viaggio con stile"
  },
  {
    icon: "js",
    name: "JS",
    description: "Come si gestisce l'interazione dell'utente?"
  },
  {
    icon: "vuejs",
    name: "Vue",
    description: "Il framework più amato da... beh, da noi!"
  },
  {
    icon: "react",
    name: "React",
    description: "Framework di casa Meta: scopri tutti i segreti"
  },
  {
    icon: "angular",
    name: "Angular",
    description: "Da mamma Google il monolitico per eccellenza"
  },
]
</script>

<template>
  <AppSection
    centeredTitle
    hasHeader
    isMinHeight
    title="Main Topics"
    subtitle="La roadmap Frontend"
  >
    <template v-slot:content>
      <div
        v-for="topic in topics"
        :key="topic.name" 
        class="column is-4"
      >
        <div class="box has-text-left">
          <article class="media">
            <div class="media-left">
              <span class="icon is-large">
                <img :src="`/icons/${topic.icon}.svg`" :alt="topic.name">
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
.box:hover span.img {
  /* background-color: var(--secondary-light); */
}
.box:hover img {
  fill: #fff;
}
.content {
  height: 70px;
  overflow-y: scroll;
}
.content span {
  font-weight: 700;
  font-size: 1.2rem;
}

.media {
  align-items: center;
}
span.icon {
  background-color: #fff;
}
i {
  color: var(--secondary-light);
}
</style>