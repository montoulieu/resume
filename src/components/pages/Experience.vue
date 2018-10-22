<template>
  <div class="experience">
    <page-content :heading="$route.name" :description="description"/>
    <div class="jobs">
      <job
        v-for="job in jobs"
        :key="job.id"
        :company="job.company"
        :location="job.location"
        :role="job.role"
        :startDate="job.startDate"
        :endDate="job.endDate"
        :techUsed="job.techUsed"
        :description="job.description"
        class="py-4"
      />
    </div>
  </div>
</template>
<script>
import PageContent from '@/components/blocks/PageContent'
import Job from '@/components/blocks/Job'

export default {
  name: 'experience',
  components: {
    'page-content': PageContent,
    'job': Job
  },
  data () {
    return {
      description: `
        <p>I originally started tinkering with web technologies in the 5th grade and since<br class="d-none d-md-block"> then have continously pushed myself to learn the latest and greatest in the field.</p>
        <p>Moving to Denver opened up so many opportunities to work with agencies and land freelance clients that I never really had back in Florida.</p>
        <p>Because of this, the last 5 years have brought exponential growth to my coding skillset and the connections I've made make me proud to live and work here. </p>
      `,
      jobs: [
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Lead Developer',
          startDate: '11092015',
          endDate: '10262018',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9', 'BigCommerce', 'Magento', 'Hubspot'],
          description: 'Kristy and the team at Graphik helped enable me to learn a ton on the various aspects of web development. Working together with a tightnit dev team and a few badass designers, we launched over 40 sites on Sage 8/9 in my time there and we did some pretty stellar work. Being trusted enough to try new frameworks and call shots on implementation was refreshing and will always remind me how important experimentation and culture is in the workplace.'
        },
        {
          company: 'Orange Collar Media',
          location: 'Denver, CO',
          role: 'Front End Developer',
          startDate: '02052014',
          endDate: '10282015',
          techUsed: ['Magento', 'Wordpress'],
          description: 'OCM was a great learning experience. Working for 2 years there allowed me to gain a wealth of knowledge regarding the inner workings of PHP and Magento as well as different build/deploy processes, version control with Git and responsive design.'
        },
        {
          company: 'Denver Mac Repair',
          location: 'Denver, CO',
          role: 'Mac Technician',
          startDate: '11252013',
          endDate: '02012014',
          techUsed: ['macOS'],
          description: 'DMR was a fun place to work for. I serviced iPhone and Mac hardware, replacing screens on cracked phones or swapping an iMacs dead harddrive with a speedy new SSD. My coworkers were awesome people that taught me an incredible amount on Apple hardware & software while working there.'
        },
        {
          company: 'Weedmaps',
          location: 'Denver, CO',
          role: 'QA/Client Rep',
          startDate: '05142013',
          endDate: '09182013',
          techUsed: ['Salesforce'],
          description: `My first job after moving to Denver and boy was it a blast. Getting to talk to clients from around the country that used the site or app was entertaining and enjoyable. While I didn't do any coding while I was there, I hung out with the devs and got to learn about the Ruby on Rails stack they were running at the time.`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
