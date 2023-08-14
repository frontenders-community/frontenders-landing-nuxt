<script setup></script>

<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <figure class="image is-96x96">
        <img src="logo.jpeg" />
      </figure>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="myNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="myNavbar" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">
          Home
        </NuxtLink>

        <NuxtLink to="/about" class="navbar-item">
          Chi siamo
        </NuxtLink>

        <NuxtLink to="/challenges/" class="navbar-item">
          Challenges
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <button class="cta button is-medium">Unisciti a noi</button>
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