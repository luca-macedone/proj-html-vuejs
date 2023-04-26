import { createApp } from 'vue'
import '/node_modules/bootstrap/dist/js/bootstrap.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faMagnifyingGlass, faCartShopping);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
