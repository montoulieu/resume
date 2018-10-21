<template>
  <div id="resume" class="container py-3 py-lg-5">
    <b-row>
      <b-col lg="2" order-lg="2" class="nav-area ml-auto pb-3">
        <main-nav/>
      </b-col>
      <b-col md="12" lg="9" class="main">
        <transition name="fade" transition-mode="in-out">
          <router-view></router-view>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Nav from '@/components/blocks/Nav'
import PageContent from '@/components/blocks/PageContent'

export default {
  name: 'resume',
  components: {
    'main-nav': Nav,
    'page-content': PageContent
  }
}
</script>

<style lang="scss">
  @import './assets/sass/resume.scss';
</style>
