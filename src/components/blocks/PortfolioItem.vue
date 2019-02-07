<template>
  <b-col cols="12" md="6" class="portfolio-item pb-4">
    <div class="image-container mb-3">
      <img :src="require(`@/assets/${image}`)" class="img-fluid rounded screenshot">
      <b-btn variant="primary" class="btn-sm" v-if="link" :href="link" target="_blank">View Project »</b-btn>
      <b-btn variant="primary" class="btn-sm" v-if="!link" href="#">Coming Soon</b-btn>
    </div>
    <h3 class="h5 portfolio-title text-green font-weight-black">{{ title }}</h3>
    <p class="">{{ description }}</p>
  </b-col>
</template>

<script>
  export default {
    name: 'portfolio-item',
    props: ['title', 'image', 'description', 'link', 'status']
  }
</script>
<style lang="scss" scoped>
  .portfolio-item {
    .image-container {
      position: relative;

      .btn {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        position: absolute;
        width: 8rem;
        height: 2rem;
        opacity: 0;
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
        filter: blur(15px);
      }

      img {
        filter: blur(0) saturate(1);
        transition: all 0.4s ease-in-out;
      }

      &:hover {
        .btn {
          opacity: 1;
          transform: scale(1.2);
          filter: blur(0);
        }

        img {
          opacity: 0.45;
          transform: scale(0.95);
          filter: blur(5px) saturate(0);
        }
      }
    }
  }
</style>

