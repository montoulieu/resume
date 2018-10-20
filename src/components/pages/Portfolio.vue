<template>
  <div class="portfolio">
    <page-content :heading="$route.name"/>
    <div v-for="category in work" :key="category.id">
      {{ category.category }}
    </div>
  </div>
</template>
<script>
  import PageContent from '@/components/blocks/PageContent'
  export default {
    name: 'portfolio',
    components: {
      'page-content': PageContent
    },
    data () {
      return {
        description: '',
        work: [
          {
            category: 'Web',
            projects: [
              {
                title: 'Tuk It Tour Co',
                location: 'Asheville, NC',
                image: '../../portfolio/tukit.jpg'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
