<template>
  <b-row class="portfolio-item border-bottom-green py-4">
    <b-col cols="12" md="6" order-md="2" class="">
      <!-- <b-btn v-if="link" class="float-md-right">Link</b-btn> -->
      <h3 class="h5 portfolio-title text-green font-weight-black">{{ title }}</h3>
      <p class="">{{ description }}</p>
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-center">
      <img :src="require(`@/assets/${image}`)" class="img-fluid rounded screenshot">
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
  .portfolio-item {

  }
</style>
