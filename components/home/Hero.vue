<script setup>
const parallaxImages = [
  {
    url: "hero/computer.png",
    speed: 0,
    alt: "Computer"
  },
  {
    url: "hero/sun.png",
    speed: -0.5,
    alt: "Sole"
  },
  {
<<<<<<< HEAD
    url: "/hero/window.png.webp",
=======
    url: "hero/window.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
    speed: -0.2,
    alt: "Finestra del browser"
  },
  {
<<<<<<< HEAD
    url: "/hero/man-1.png.webp",
=======
    url: "hero/man-1.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
    speed: 0,
    animated: true,
    animationName: 'updown',
    alt: "Un uomo in piedi con un portatile in mano"
  },
  {
<<<<<<< HEAD
    url: "/hero/man-2.png.webp",
=======
    url: "hero/man-2.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
    speed: 0,
    animated: true,
    animationName: 'downup',
    alt: "Un uomo che indica la finestra del browser"
  },
  {
<<<<<<< HEAD
    url: "/hero/woman-1.png.webp",
=======
    url: "hero/woman-1.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
    speed: 0,
    animated: true,
    animationName: 'leftright',
    alt: "Una ragazza seduta con un computer portatile"
  },
  {
<<<<<<< HEAD
    url: "/hero/html.png.webp",
=======
    url: "hero/html.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
    speed: 0.5,
    alt: "Logo di html"
  },
  {
<<<<<<< HEAD
    url: "/hero/css.png.webp",
=======
    url: "hero/css.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
    speed: 0.1,
    alt: "Logo di css"
  },
  {
<<<<<<< HEAD
    url: "/hero/brakets.png.webp",
=======
    url: "hero/brakets.png",
>>>>>>> e9960b7bd04ff32a4acdd78cdda8fc9b196a7d9d
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
  <section class="jumbotron-bg jumbotron section section-diagonal is-medium" @mousemove="applyParallax">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-flex is-flex-direction-column is-align-items-flex-start">
          <h1 class="mb-6">
            <span class="title is-1">Frontenders</span><br>
            <span class="subtitle is-3">Non è la solita community: challenge pazzesche, sessioni di coding e tanto studio!</span>
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

// .layer.animated {
//   animation: 3.5s linear infinite;
// }
// 
// .layer.animated.animation-updown {
//   animation-name: upDown;
//   animation-delay: .6s;
// }
// 
// .layer.animated.animation-downup {
//   animation-name: downUp;
// }
// 
// .layer.animated.animation-leftright {
//   animation-name: leftRight;
//   animation-delay: .6s;
// }
// 
// @keyframes upDown {
//   0% {
//     transform: translateY(-10px);
//   }
// 
//   50% {
//     transform: translateY(5px);
//   }
// 
//   100% {
//     transform: translateY(-10px);
//   }
// }
// 
// @keyframes downUp {
//   0% {
//     transform: translateY(8px);
//   }
// 
//   50% {
//     transform: translateY(-6px);
//   }
// 
//   100% {
//     transform: translateY(8px);
//   }
// }
// 
// @keyframes leftRight {
//   0% {
//     transform: translateX(8px);
//   }
// 
//   50% {
//     transform: translateX(-6px);
//   }
// 
//   100% {
//     transform: translateX(8px);
//   }
// }
</style>