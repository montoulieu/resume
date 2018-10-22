import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/pages/About'
import Skills from '@/components/pages/Skills'
import Experience from '@/components/pages/Experience'
import Portfolio from '@/components/pages/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
