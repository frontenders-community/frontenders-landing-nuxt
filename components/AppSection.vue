<script setup>
const props = defineProps({
  centeredTitle: {
    type: Boolean,
    required: false,
  },
  hasHeader: {
    type: Boolean,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  subtitle: {
    type: String,
    required: false,
  },
  isAlternate: {
    type: Boolean,
    required: false,
  },
  isMinHeight: {
    type: Boolean,
    required: false,
  },
  isGradient: {
    type: Boolean,
    required: false,
  },
  isTwoContentLayout: {
    type: Boolean,
    required: false,
  }
})
</script>

<template>
  <section class="section"
    :class="{ 'has-text-centered': hasHeader && centeredTitle, 'alternate': isAlternate, 'gradient': isGradient, 'min-height': isMinHeight }">
    <div class="container">
      <template v-if="hasHeader">
        <h6 class="section-subtitle subtitle is-6 is-uppercase">{{ subtitle }}</h6>
        <h2 class="title is-1">{{ title }}</h2>
      </template>

      <div v-if="isTwoContentLayout" class="columns is-vcentered">
        <div class="column is-6">
          <slot name="leftColumn"></slot>
        </div>
        <div class="column is-6">
          <slot name="rightColumn"></slot>
        </div>
      </div>

      <div class="columns is-centered is-vcentered is-multiline">
        <slot name="content"></slot>
      </div>

      <slot name="cta"></slot>
    </div>
  </section>
</template>

<style>
.gradient {
  background: radial-gradient(circle, rgba(246, 255, 180, 1) 0%, rgba(108, 119, 231, 1) 0%, rgba(251, 254, 227, 1) 100%);

}
</style>