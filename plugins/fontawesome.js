import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3, faJs, faAngular, faVuejs, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(faHtml5, faCss3, faJs, faAngular, faVuejs, faReact)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})