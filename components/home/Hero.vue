<script setup>
const parallaxImages = [
  {
    url: "hero/computer.png.webp",
    speed: 0,
    alt: "Computer"
  },
  {
    url: "hero/window.png.webp",
    speed: -0.2,
    alt: "Finestra del browser"
  },
  {
    url: "hero/man-1.png.webp",
    speed: 0,
    animated: true,
    animationName: 'updown',
    alt: "Un uomo in piedi con un portatile in mano"
  },
  {
    url: "hero/man-2.png.webp",
    speed: 0,
    animated: true,
    animationName: 'downup',
    alt: "Un uomo che indica la finestra del browser"
  },
  {
    url: "hero/woman-1.png.webp",
    speed: 0,
    animated: true,
    animationName: 'leftright',
    alt: "Una ragazza seduta con un computer portatile"
  },
  {
    url: "hero/js.png.webp",
    speed: -0.3,
    alt: "Logo di javascript"
  },
  {
    url: "hero/html.png.webp",
    speed: 0.5,
    alt: "Logo di html"
  },
  {
    url: "hero/css.png.webp",
    speed: 0.1,
    alt: "Logo di css"
  },
  {
    url: "hero/brakets.png.webp",
    speed: 0.2,
    alt: "Parentesi html chiusa"
  },
]

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
  <section class="jumbotron-bg jumbotron section section-diagonal-right is-medium" @mousemove="applyParallax">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-flex is-flex-direction-column is-align-items-flex-start">
          <h1 class="mb-6">
            <span class="title is-1">Frontenders</span><br>
            <span class="subtitle is-3">La community dedicata al frontend. Challenge pazzesche, sessioni di studio e tanta passione!</span>
          </h1>
          <a href="https://discord.gg/ZdfWFBMw8z" target="_blank" class="cta button is-medium">Entra nella community</a>
        </div>
        <div class="column is-6 is-hidden-mobile">
          <div class="parallax-container">
            <img
              v-for="(img, index) in parallaxImages" 
              :key="index"
              :src="img.url"
              preload
              :alt="img.alt"
              class="layer"
              width="500px"
              :data-speed="img.speed" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.jumbotron {
  margin-top: 96px;
  overflow: hidden;
}

.parallax-container {
  position: relative;
  height: 360px;

  @media screen and (min-width: 520px) {
    height: 440px;
  }

  @media screen and (min-width: 769px) {
    height: 400px;
  }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
}

.layer {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 90%;
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    top: -30px;
  }
}
</style>