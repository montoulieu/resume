<template>
  <b-row class="portfolio-item border-bottom-green py-4">
    <b-col cols="12" md="6" class="d-flex justify-content-center align-items-center">
      <img :src="require(`@/assets/${image}`)" class="img-fluid rounded screenshot mb-4 mb-md-0">
    </b-col>
    <b-col cols="12" md="6" class="d-flex flex-column align-items-start justify-content-center">
      <h3 class="h5 portfolio-title text-green font-weight-black">{{ title }}</h3>
      <p class="">{{ description }}</p>
      <b-btn variant="outline-primary" v-if="link" :href="link" target="_blank">View Project »</b-btn>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'portfolio-item',
    props: ['title', 'image', 'description', 'link', 'status']
  }
</script>

<style lang="scss" scoped>
  .portfolio-item {}
</style>
