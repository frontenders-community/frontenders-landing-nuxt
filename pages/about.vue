<script setup>
useHead({
  title: "Frontenders - Chi siamo",
  meta: [
    {
      name: "description", content: "La community dedicata al frontend con challenge pazzesche"
    }
  ],
})
</script>

<template>
  <div>
    <section class="jumbotron jumbotron-bg section">
      <p class="title is-2">
        Hello, Frontenders
      </p>
      <p class="subtitle is-4">
        ecco perchè abbiamo deciso di creare una community
      </p>
    </section>

    <section class="section">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <img src="condivisione.png" alt="Frontenders">
        </div>
        <div class="column is-6">
          <h6 class="section-subtitle subtitle is-6 is-uppercase">la community</h6>
          <h2 class="title is-1">La conoscenza muore se non è condivisa</h2>

          <div class="content is-size-4">
            Crediamo nella condivisione della conoscenza.
            Tutto nasce dalla nostra esperienza di sviluppatori e formatori.
            Ci piace metterci continuamente alla prova, imparare cose nuove e sperimentare.
            <strong>Frontenders è uno spazio dove chi ha voglia di imparare non si sente escluso, ma motivato e
              spronato.</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="alternate section has-text-centered">
      <h6 class="section-subtitle subtitle is-6 is-uppercase">hello, world</h6>
      <h2 class="title is-1">I formatori (cioè noi)</h2>

      <div class="columns is-centered">
        <div class="column is-2 is-flex is-flex-direction-column is-align-items-center">
          <figure class="image is-128x128">
            <img class="is-rounded" src="adriano.jpeg">
          </figure>
          <p class="mt-4 title is-4">Adriano Grimaldi</p>
          <p class="subtitle is-5">FullStack Web Developer</p>
        </div>
        <div class="column is-2 is-flex is-flex-direction-column is-align-items-center">
          <figure class="image is-128x128">
            <img class="is-rounded" src="olga.jpeg">
          </figure>
          <p class="mt-4 title is-4">Olga Demina</p>
          <p class="subtitle is-5">FullStack Web Developer</p>
        </div>
        <div class="column is-2 is-flex is-flex-direction-column is-align-items-center">
          <figure class="image is-128x128">
          
          </figure>
          <p class="mt-4 title is-4">Vorresti essere qui?</p>
          <p class="subtitle is-5">Scrivici per diventare formatore Fronteders</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.jumbotron {
  margin-top: 96px;
}

.section-subtitle {
  letter-spacing: 4px;
  font-weight: 700;
  color: var(--secondary);
}

.instructor .title,
.instructor .subtitle {
  color: #000;
}
</style>
