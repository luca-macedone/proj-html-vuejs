import { createApp } from 'vue'
import '/node_modules/bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faMagnifyingGlass, faArrowRight, faArrowRightLong, faAngleUp, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faLinkedinIn, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faMagnifyingGlass, faCartShopping, faYoutube, faArrowRight, faAngleUp, faAngleRight, faPlay, faArrowRightLong, faFacebookF, faLinkedinIn, faInstagram, faTwitter);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
