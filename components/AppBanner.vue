<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: false
    }
})
</script>

<template>
    <section class="jumbotron jumbotron-bg section">
        <div class="container">
            <p class="title is-2">
                {{ title }}
            </p>
            <p class="subtitle is-4" v-if="subtitle">
                {{ subtitle }}
            </p>
        </div>
    </section>
</template>

<style scoped>
.jumbotron {
    margin-top: 96px;
}
</style>