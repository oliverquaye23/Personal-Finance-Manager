import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleCheck  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

library.add(faCircleCheck );

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(vuetify)
  .mount('#app')


  import 'bootstrap/dist/js/bootstrap.js'
