<script setup>
const parallaxImages = [
  {
    url: "hero/computer.png",
    speed: 0
  },
  {
    url: "hero/sun.png",
    speed: -0.5
  },
  {
    url: "hero/window.png",
    speed: -0.2
  },
  {
    url: "hero/man-1.png",
    speed: 0,
    animated: true,
    animationName: 'updown'
  },
  {
    url: "hero/man-2.png",
    speed: 0,
    animated: true,
    animationName: 'downup'
  },
  {
    url: "hero/woman-1.png",
    speed: 0,
    animated: true,
    animationName: 'leftright'
  },
  {
    url: "hero/html.png",
    speed: 0.5
  },
  {
    url: "hero/css.png",
    speed: 0.1
  },
  {
    url: "hero/brakets.png",
    speed: 0.2
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
  <section class="jumbotron-bg jumbotron section section-diagonal is-medium" @mousemove="applyParallax">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-flex is-flex-direction-column is-align-items-flex-start">
          <h1 class="title is-1">
            Frontenders
          </h1>
          <h3 class="subtitle is-3 is-size-5">
            Non è la solita community: challenge pazzesche, sessioni di coding e tanto studio!
          </h3>
          <button class="cta button is-large">Entra nella community</button>
        </div>
        <div class="column is-6">
          <div class="parallax-container">
            <img v-for="(img, index) in parallaxImages" :key="index" :src="img.url" alt="" class="layer"
              :class="[img.animated ? 'animated' : '', `animation-${img.animationName}`]" :data-speed="img.speed">
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

.layer.animated {
  animation: 3.5s linear infinite;
}

.layer.animated.animation-updown {
  animation-name: upDown;
  animation-delay: .6s;
}

.layer.animated.animation-downup {
  animation-name: downUp;
}

.layer.animated.animation-leftright {
  animation-name: leftRight;
  animation-delay: .6s;
}

@keyframes upDown {
  0% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(-10px);
  }
}

@keyframes downUp {
  0% {
    transform: translateY(8px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(8px);
  }
}

@keyframes leftRight {
  0% {
    transform: translateX(8px);
  }

  50% {
    transform: translateX(-6px);
  }

  100% {
    transform: translateX(8px);
  }
}
</style>