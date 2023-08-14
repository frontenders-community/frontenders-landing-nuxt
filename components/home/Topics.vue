<script setup>
import AppSection from '../AppSection.vue';

const topics = [
  {
    icon: "fa-brands fa-html5 fa-2x",
    name: "HTML",
    description: "Semantica, tag e attributi non saranno più un mistero"
  },
  {
    icon: "fa-brands fa-css3-alt fa-2x",
    name: "CSS",
    description: "Da display a flex, fino alle grid, un viaggio con stile"
  },
  {
    icon: "fa-brands fa-js fa-2x",
    name: "JS",
    description: "Come si gestisce l'interazione dell'utente?"
  },
  {
    icon: "fa-brands fa-vuejs fa-2x",
    name: "Vue",
    description: "Il framework più amato da... beh, da noi!"
  },
  {
    icon: "fa-brands fa-react fa-2x",
    name: "React",
    description: "Framework di casa Meta: scopri tutti i segreti"
  },
  {
    icon: "fa-brands fa-angular fa-2x",
    name: "Angular",
    description: "Da mamma Google il monolitico per eccellenza"
  },
]
</script>

<template>
  <AppSection
    centeredTitle
    hasHeader
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
                <i :class="topic.icon"></i>
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
.box:hover span.icon {
  background-color: var(--secondary-light);
}
.box:hover i {
  color: #fff;
}
.content {
  height: 70px;
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