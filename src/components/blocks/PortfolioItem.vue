<template>
  <b-col cols="12" md="6" class="portfolio-item pb-4">
    <h3 class="h5 portfolio-title float-md-right text-green font-weight-black">{{ title }}</h3>
    <img :src="require(`@/assets/${image}`)" class="img-fluid rounded screenshot">
  </b-col>
</template>

<script>
  export default {
    name: 'portfolio-item',
    props: ['title', 'image', 'description']
  }
</script>

<style lang="scss" scoped>
  .portfolio-item {
    transition: transform 0.35s ease-in;
    position: relative;
    z-index: 20;

    .portfolio-title {
      text-shadow: none;
      transition: text-shadow 0.35s ease-in;
      cursor: pointer;
    }

    img {
      box-shadow: none;
      transition: box-shadow 0.35s ease-in;
      cursor: pointer;
    }

    &:hover {
      transform: scale(1.05);

      .portfolio-title {
        text-shadow: 0 0 5px rgba(0,0,0,0.35);
      }

      img {
        box-shadow: 0 0 30px rgba(0,0,0,0.35);
      }
    }
  }
</style>
