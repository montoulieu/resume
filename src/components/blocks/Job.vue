<template>
  <div class="job border-bottom-green">
    <header class="d-flex align-items-center">
      <div class="job-info">
        <h4 class="d-inline-block text-green font-weight-black mr-2">{{ company }}</h4>
        <h6 class="d-md-inline-block">{{ location }}</h6>
        <h5>{{ role }}</h5>
      </div>
      <div v-if="startDate" class="employment-dates text-green text-center ml-auto">

        <h6 v-if="currentlyWorking">Present</h6>
        <h6 v-if="!currentlyWorking">{{ [endDate, "MMDDYYYY"] | moment("MMM YYYY") }}</h6>
        <h6>{{ [startDate, "MMDDYYYY"] | moment("MMM YYYY") }}</h6>
      </div>
    </header>
    <section v-if="techUsed" class="tech-used">
      <ul class="tech-list list-separators list-inline mt-2 mb-3">
        <li class="list-inline-item text-green font-weight-bold">Tech Used: </li>
        <li class="list-inline-item" v-for="tech in techUsed" :key="tech.id">{{ tech }}</li>
      </ul>
    </section>
    <section v-if="description" class="description">
      <h6 class="d-inline text-green font-weight-bold mr-2">About: </h6>
      <p class="d-inline mb-0">{{ description }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: ['company', 'location', 'role', 'startDate', 'endDate', 'techUsed', 'description', 'currentlyWorking'],
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
$color-brand: #49b884;

.list-separators li:nth-child(2)::before {
  content: '';
}
</style>
