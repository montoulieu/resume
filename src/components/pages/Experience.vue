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
        <p>While I've spent the last 10 years of my dev work focused on PHP with Magento and Wordpress, I've been building my skills with React and Vue.js in the last year.</p>
      `,
      jobs: [
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Lead Developer',
          startDate: '11092015',
          endDate: '10262018',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9', 'BigCommerce', 'Magento', 'Hubspot'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sem vel lorem tincidunt mollis. Nunc blandit vulputate sem ut pellentesque. Mauris a lorem sed augue sollicitudin tincidunt.'
        },
        {
          company: 'Orange Collar Media',
          location: 'Denver, CO',
          role: 'Front End Developer',
          startDate: '02052014',
          endDate: '10282015',
          techUsed: ['Magento', 'Wordpress'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sem vel lorem tincidunt mollis. Nunc blandit vulputate sem ut pellentesque. Mauris a lorem sed augue sollicitudin tincidunt.'
        },
        {
          company: 'Denver Mac Repair',
          location: 'Denver, CO',
          role: 'Mac Technician',
          startDate: '11252013',
          endDate: '02012014',
          techUsed: ['macOS'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sem vel lorem tincidunt mollis. Nunc blandit vulputate sem ut pellentesque. Mauris a lorem sed augue sollicitudin tincidunt.'
        },
        {
          company: 'Weedmaps',
          location: 'Denver, CO',
          role: 'QA/Client Rep',
          startDate: '05142013',
          endDate: '09182013',
          techUsed: ['Salesforce'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sem vel lorem tincidunt mollis. Nunc blandit vulputate sem ut pellentesque. Mauris a lorem sed augue sollicitudin tincidunt.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>



</style>
