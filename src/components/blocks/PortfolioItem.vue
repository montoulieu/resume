<template>
  <b-row class="portfolio-item">
    <b-col cols="12" md="6" order-md="2" class=" pb-4">
      <h3 class="h5 portfolio-title text-green font-weight-black">{{ title }}</h3>
      <p>{{ description }}</p>
    </b-col>
    <b-col cols="12" md="6" class=" pb-4">
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
