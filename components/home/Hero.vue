<script setup>
const applyParallax = (e) => {
  document.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    if (speed != 0) {
      const x = (e.pageX * speed) / 10;
      const y = (e.pageY * speed) / 10;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  });
}

</script>

<template>
  <section class="jumbotron-bg jumbotron section is-medium" @mousemove="applyParallax">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-flex is-flex-direction-column is-align-items-flex-start">
          <h1 class="title is-1">
            Frontenders
          </h1>
          <h3 class="subtitle is-3">
            Non è la solita community: challenge pazzesche, sessioni di coding e tanto studio!
          </h3>
          <button class="cta button is-large">Entra nella community</button>
        </div>
        <div class="column is-6">
          <div class="parallax-container">
            <img src="hero/computer.png" alt="" class="layer layer-1" data-speed="0">
            <img src="hero/sun.png" alt="" class="layer layer-2" data-speed="-0.5">
            <img src="hero/window.png" alt="" class="layer layer-3" data-speed="-0.2">
            <img src="hero/man-1.png" alt="" class="layer layer-4" data-speed="0">
            <img src="hero/man-2.png" alt="" class="layer layer-5" data-speed="0">
            <img src="hero/woman-1.png" alt="" class="layer layer-6" data-speed="0">
            <img src="hero/html.png" alt="" class="layer layer-7" data-speed="0.5">
            <img src="hero/css.png" alt="" class="layer layer-8" data-speed="0.1">
            <img src="hero/brakets.png" alt="" class="layer layer-9" data-speed="0.2">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron {
  margin-top: 96px;
}

.parallax-container {
  position: relative;
  height: 400px;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
}
</style>