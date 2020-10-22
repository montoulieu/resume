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
      age: 31,
      bio: `
      <p>My name is Pieter Montoulieu and I'm a full stack web and game developer from Miami, FL. <br class="d-none d-md-block">
      I moved to Denver, CO in 2013 with the goal of coding and creating rad software and music.</p>
      <p>My current interests include:</p>
      <ul class="text-green">
        <li>SPAs/PWAs with Vue & React</li>
        <li>AR/VR experiences with Unity 3D</li>
        <li>iOS/macOS apps with Swift</li>
      </ul>
      <p>When I'm not coding games and websites, I'm probably in my home studio <br class="d-none d-md-block">
      writing tunes or going out to live shows in the amazing music scene we have here.</p>
      <p>This resume is built with Vue and deployed on Netlify.</p>
      <p>Feel free to <a href="https://github.com/montoulieu/resume" target="_blank">check the source out</a>.</p>
      <p>Thanks for visiting,<br>Pieter 🤘</p>
      `
    }
  }
}
</script>

<style lang="scss" scoped></style>
