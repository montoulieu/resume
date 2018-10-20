<template>
  <div class="about text-left">
    <b-row>
      <b-col cols="12">
        <page-content :heading="name" :subheading="profession + ' - ' + age" />
        <div v-html="bio"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageContent from '@/components/blocks/PageContent'

export default {
  name: 'about',
  components: {
    'page-content': PageContent
  },
  data () {
    return {
      msg: 'Hello',
      name: 'Pieter Montoulieu',
      profession: 'Front End Web Developer',
      age: 29, // Making this an int to force myself to update this thing every year 😅
      bio: `
      <p>Hi I'm Pieter Montoulieu, a front end web and game developer from Miami, FL. <br class="d-none d-md-block">I moved to Denver, CO in 2014 and have been loving every moment of it.</p>
      <p>My current interests are in VR/AR and educational game development,<br class="d-none d-md-block"> Vue.js and React.js web applications as well as iOS/macOS applications.</p>
      <p>When I'm not coding games and websites, I'm probably in my home studio<br class="d-none d-md-block"> creating music or going out to shows in the amazing scene we have here.</p>
      <p>This resume is currently built with Vue.js and Bootstrap 4, <br class="d-none d-md-block">feel free to <a href="https://github.com/pi-mont/resume" target="_blank">check the source out</a>.</p>
      <p>Thanks for visiting,<br>Pieter 🤘</p>
      `
    }
  }
}
</script>

<style scoped>

</style>
