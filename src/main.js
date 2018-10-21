import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Resume from './Resume'
import router from './router'
import './assets/sass/resume.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './svg-triangles'

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#resume',
  router,
  template: '<Resume/>',
  components: { Resume }
})
