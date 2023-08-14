<script setup></script>

<template>
  <section class="section stats">
    <div class="columns is-multiline has-text-centered">
      <div class="column is-3">
        <span class="icon is-large">
          <i class="fa-solid fa-users fa-2x"></i>
        </span>
        <h2 class="title is-2">+550</h2>
        <h5 class="subtitle is-5 is-uppercase">utenti</h5>
      </div>
      <div class="column is-3">
        <span class="icon is-large">
          <i class="fa-solid fa-laptop-code fa-2x"></i>
        </span>
        <h2 class="title is-2">16</h2>
        <h5 class="subtitle is-5 is-uppercase">challenge</h5>
      </div>
      <div class="column is-3">
        <span class="icon is-large">
          <i class="fa-regular fa-calendar-days fa-2x"></i>
        </span>
        <h2 class="title is-2">12</h2>
        <h5 class="subtitle is-5 is-uppercase">sessioni di studio</h5>
      </div>
      <div class="column is-3">
        <span class="icon is-large">
          <i class="fa-brands fa-youtube fa-2x"></i>
        </span>
        <h2 class="title is-2">180</h2>
        <h5 class="subtitle is-5 is-uppercase">iscritti</h5>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  background-color: var(--primary);
  color: rgb(51, 51, 51);
}
.column:not(:last-child) {
  border-right: 1px solid rgba(51, 51, 51, .3);
}
</style>