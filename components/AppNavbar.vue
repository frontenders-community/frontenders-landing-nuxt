<script setup>
import { ref } from 'vue'

const navbarOpen = ref(false);

const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value;
}
</script>

<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <Nuxt-link
        to="/" 
        @click="toggleNavbar"
      >
        <figure class="image is-96x96">
          <img
            width="300"
            height="300"
            src="/logo.jpeg.webp"
            alt="Logo di frontenders"
          />
        </figure>
      </Nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': navbarOpen }"
        aria-label="menu"
        aria-expanded="false"
        data-target="myNavbar"
        @click="toggleNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="myNavbar" class="navbar-menu" :class="{ 'is-active': navbarOpen }">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item" @click="toggleNavbar">
          Home
        </NuxtLink>

        <NuxtLink to="/about" class="navbar-item" @click="toggleNavbar">
          Chi siamo
        </NuxtLink>

        <NuxtLink to="/challenges?topic=all" class="navbar-item" @click="toggleNavbar">
          Challenges
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a href="https://discord.gg/ZdfWFBMw8z" target="_blank" class="cta button is-medium">Unisciti a noi</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-item {
  font-size: 1.2rem;
}
</style>