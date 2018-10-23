<template>
  <div class="portfolio">
    <page-content :heading="$route.name" :description="description"/>
    <b-row v-for="category in work" :key="category.id" class="border-bottom-green py-3">
      <b-col cols="12" class="">
        <h2 class="h3 text-green font-weight-black mb-3">{{ category.category }}</h2>
      </b-col>
      <b-col cols="12" class="">
        <portfolio-item
        v-for="project in category.projects"
        :image="project.image"
        :title="project.title"
        :description="project.description"
        :link="project.link"
        :key="project.id"
        />
      </b-col>
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
              title: 'Havok',
              image: 'portfolio/sites/havok.jpg',
              description: 'A Sage 9 & Wordpress site for Colorado thrash metal masters, Havok.',
              link: ''
            },
            {
              title: 'White Groves Barber',
              image: 'portfolio/sites/whitegroves.jpg',
              description: 'A Sage 9 & Wordpress site for White Groves Barber and Tap House in Loveland, CO.',
              link: ''
            },
            {
              title: 'Tuk It Tour Co',
              image: 'portfolio/sites/tukit.jpg',
              description: 'A Sage 9 & Wordpress site that uses CSS/SVG animations and cartoonesque parallax layers.',
              link: 'http://tukittourco.com'
            },
            {
              title: 'Metro Optical',
              image: 'portfolio/sites/metro.jpg',
              description: 'A futuristic/sci-fi design built with Sage 9 and Wordpress for Metro Optical telecom.',
              link: 'http://metrooptical.com'
            },
            {
              title: 'Muscle Sound',
              image: 'portfolio/sites/musclesound.jpg',
              description: 'A sleek design built with Sage 9 & Wordpress site for Muscle Sound.',
              link: 'http://www.musclesound.com'
            },
            {
              title: 'Symplicity',
              image: 'portfolio/sites/symplicity.jpg',
              description: 'A Sage 9 & Wordpress site for Symplicity Communications.',
              link: 'http://symplicitycom.com'
            },
            {
              title: 'Dmarie and Co.',
              image: 'portfolio/sites/dmarie.jpg',
              description: 'A Sage 9 & Wordpress site for Dmarie and Co.',
              link: 'http://dmarieandco.com'
            },
            {
              title: 'Knoff Group Real Estate',
              image: 'portfolio/sites/knoff.jpg',
              description: 'A Sage 9 & Wordpress site with IDX integration for Knoff Group Real Estate in Montana',
              link: 'https://knoffgroup.com'
            },
            {
              title: 'Pixel Glitch',
              image: 'portfolio/sites/pixelglitch.jpg',
              description: 'A little self promotion never hurts, a Sage 8 & Wordpress site for my music and gamedev company, Pixel Glitch LLC',
              link: 'http://pixelglitch.net'
            },
            {
              title: 'Trump Time',
              image: 'portfolio/sites/trump-time.jpg',
              description: 'Launched on the 4th of July of last year. Trump Time is a web app that allows you to generate your own fake Time magazine covers.',
              link: 'http://pi-mont.github.io/trump-time'
            }
          ]
        },
        {
          category: 'Games',
          projects: [
            {
              title: 'Spacecrimes',
              image: 'portfolio/games/spacecrimes.jpg',
              description: `Spacecrimes is a cyberpunk detective adventure game inspired by some of my favorite point & click and text adventure games like Snatcher, Policenauts and Sam & Max.`,
              link: ''
            },
            {
              title: 'Space Mutiny',
              image: 'portfolio/games/spacemutiny.jpg',
              description: 'A 2D/3D metroidvania mashup mixing puzzle solving and lazer shootouts with the undead crew of an abandoned generation ship.',
              link: ''
            }
          ]
        },
        {
          category: 'macOS',
          projects: [
            {
              title: 'Dark Mode Toggle',
              image: 'portfolio/apps/darkmodetoggle.gif',
              description: 'A macOS menu application that allows for easy toggling of Dark Mode in Mojave, High Sierra, Sierra and Yosemite.',
              link: 'https://gum.co/DarkModeToggle'
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
