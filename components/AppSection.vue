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
  },
  classes: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section class="section"
    :class="[{ 'has-text-centered': hasHeader && centeredTitle, 'alternate': isAlternate, 'gradient': isGradient, 'min-height': isMinHeight}, classes] ">
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

      <div class="columns is-centered is-align-items-flex-start is-vcentered is-multiline">
        <slot name="content"></slot>
      </div>

      <slot name="cta"></slot>
    </div>
  </section>
</template>

<style>
.gradient {
  background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(222,242,67,1) 100%);

}
</style>