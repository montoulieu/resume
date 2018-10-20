<template>
  <div class="skills">
    <page-content :heading="$route.name" :description="description"/>
    <div class="skill-list">
      <skill v-for="skill in skills" :heading="skill.heading" :list="skill.list" :key="skill.id"/>
    </div>
  </div>
</template>

<script>
import PageContent from '@/components/blocks/PageContent'
import Skill from '@/components/blocks/Skill'

export default {
  name: 'skills',
  components: {
    'page-content': PageContent,
    'skill': Skill
  },
  data () {
    return {
      description: `
        <p>I originally started tinkering with web technologies in the 5th grade and since<br class="d-none d-md-block"> then have continously pushed myself to learn the latest and greatest in the field.</p>
        <p>While my last decade of work primarily focused on Wordpress and Laravel,<br class="d-none d-md-block"> I've shifted my focus to Vue.js and React.js for the past year and have<br class="d-none d-md-block"> truly enjoyed the flexability and speed they offer.</p>
        <p>My dream job as a kid was to someday work at a rad video game dev company.<br class="d-none d-md-block"> While I haven't achieved that goal yet, I've used this passion for video games to help<br class="d-none d-md-block"> sharpen my coding skills and create the games of my dreams using Unity 3D.</p>
      `,
      skills: [
        {
          heading: 'Web',
          list: ['HTML5', 'JS', 'CSS3/SCSS', 'PHP', 'Responsive Design', 'Canvas/WebGL']
        },
        {
          heading: 'JS',
          list: ['Vue.js', 'React', 'jQuery', 'ES6', 'Node', 'Webpack']
        },
        {
          heading: 'PHP',
          list: ['Laravel', 'Wordpress', 'Magento', 'Joomla', 'Drupal']
        },
        {
          heading: 'Wordpress',
          list: ['Sage 8/9', 'Bedrock', 'Trellis', 'ACF Pro', 'Gutenberg', 'WPEngine', 'Kinsta']
        },
        {
          heading: 'Unity 3D',
          list: ['C#', 'UI', 'Dialogue System', 'MasterAudio', 'Playmaker', 'Bolt', 'DOTween Pro']
        },
        {
          heading: 'Database',
          list: ['MySQL', 'SQLite', 'MariaDB', 'Firebase']
        },
        {
          heading: 'CLI',
          list: ['Git', 'NPM/Yarn', 'WP-CLI', 'Brew', 'Grunt', 'Bower']
        },
        {
          heading: 'Tools: Coding',
          list: ['VS Code', 'Transmit', 'iTerm', 'Sequel Pro']
        },
        {
          heading: 'Tools: Design ',
          list: ['Sketch', 'Photoshop', 'Illustrator', 'After Effects', 'Final Cut Pro']
        }

      ]
    }
  }
}
</script>

<style scoped>

</style>
