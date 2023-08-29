<script setup>
import AppSection from "../AppSection.vue";
</script>

<template>
    <AppSection 
        isAlternate 
        isTwoContentLayout
        isMinHeight
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
                Tutto nasce dalla nostra esperienza di sviluppatori e formatori.
                Ci piace metterci continuamente alla prova, imparare cose nuove e sperimentare.
                <strong>Frontenders è uno spazio dove chi ha voglia di imparare non si sente escluso, ma motivato e
                    spronato.</strong>
            </div>
        </template>

    </AppSection>
</template>