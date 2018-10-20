<template>
  <div class="portfolio">
    <page-content :heading="$route.name"/>
    <b-row v-for="category in work" :key="category.id" class="border-bottom-green py-3">
      <b-col cols="12">
        <h2 class="h3 text-green mb-3">{{ category.category }}</h2>
      </b-col>
      <portfolio-item
      v-for="project in category.projects"
      :title="project.title"
      :image="project.image"
      :description="project.description"
      :key="project.id"
      />
    </b-row>
  </div>
</template>
<script>
  import PageContent from '@/components/blocks/PageContent'
  import PortfolioItem from '@/components/blocks/PortfolioItem'

  export default {
    name: 'portfolio',
    components: {
      'page-content': PageContent,
      'portfolio-item': PortfolioItem
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
                image: 'portfolio/sites/tukit.jpg',
                description: '',
                link: ''
              },
              {
                title: 'Metro Optical',
                image: 'portfolio/sites/metro.jpg',
                description: '',
                link: ''
              },
              {
                title: 'Muscle Sound',
                image: 'portfolio/sites/musclesound.jpg',
                description: '',
                link: ''
              },
              {
                title: 'Symplicity',
                image: 'portfolio/sites/symplicity.jpg',
                description: '',
                link: ''
              },
              {
                title: 'Dmarie and Co',
                image: 'portfolio/sites/dmarie.jpg',
                description: '',
                link: 'http://tukittourco.com'
              },
              {
                title: 'Knoff Group Real Estate',
                image: 'portfolio/sites/knoff.jpg',
                description: '',
                link: 'https://knoffgroup.com'
              }
            ]
          },
          {
            category: 'Games',
            projects: [
              {
                title: 'Space Crimes',
                image: 'portfolio/games/spacecrimes.jpg',
                description: '',
                link: ''
              },
              {
                title: 'Space Mutiny',
                image: 'portfolio/games/spacemutiny.jpg',
                description: '',
                link: ''
              }
            ]
          },
          {
            category: 'macOS',
            projects: [
              {
                title: 'Dark Mode Toggle',
                image: 'portfolio/tukit.jpg',
                description: '',
                link: ''
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
