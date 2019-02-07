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
      profession: 'Full Stack Developer',
      age: 29, // Making this an int to force myself to update this thing every year 😅
      bio: `
      <p>Hello! My name is Pieter Montoulieu and I'm a full stack web and game developer from Miami, FL. <br class="d-none d-md-block">
      I moved to Denver, CO in 2013 to make rad stuff and learn as much as I can.</p>
      <p>My current interests are in VR/AR and educational game development, <br class="d-none d-md-block">
      Vue/React SPAs as well as iOS/macOS applications with React Native and Swift.</p>
      <p>When I'm not coding games and websites, I'm probably in my home studio <br class="d-none d-md-block">
      creating music or going out to shows in the amazing scene we have here.</p>
      <p>This resume was built over a weekend with Vue.js and Bootstrap 4, <br class="d-none d-md-block">
      feel free to <a href="https://github.com/pi-mont/resume" target="_blank">check the source out</a>.</p>
      <p>Thanks for visiting,<br>Pieter 🤘</p>
      `
    }
  }
}
</script>

<style lang="scss" scoped></style>
