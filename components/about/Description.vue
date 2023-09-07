<script setup>
import AppSection from "../AppSection.vue";
</script>

<template>
    <AppSection 
        isAlternate 
        isTwoContentLayout
        isMinHeight
        classes="section-diagonal-right"
    >
        <template v-slot:leftColumn>
            <img
                src="/condivisione.png.webp"
                alt="Frontenders"
            />
        </template>

    <template v-slot:rightColumn>
      <h6 class="section-subtitle subtitle is-6 is-uppercase">la community</h6>
      <h2 class="title is-1">La conoscenza muore se non è condivisa</h2>

      <div class="content is-size-4">
        Crediamo nella condivisione della conoscenza.
        Tutto nasce dalla nostra esperienza di sviluppatori e soprattutto di docenti.
        Vogliamo trasmettere la passione per questo lavoro, ci piace metterci continuamente alla prova, imparare cose nuove e sperimentare.
        Frontenders nasce con questo intento: <strong>uno spazio per chi ha voglia di imparare e di condividere qualcosa con gli altri.</strong>
      </div>
    </template>

  </AppSection>
</template>