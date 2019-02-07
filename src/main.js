import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Resume from './Resume'
import router from './router'
import './assets/sass/resume.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './svg-triangles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

library.add(faTerminal, faGithub, faMobile, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#resume',
  router,
  template: '<Resume/>',
  components: { Resume }
})
