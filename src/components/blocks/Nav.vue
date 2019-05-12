<template>
  <div class="nav-container">
    <b-nav class="text-right flex-wrap-reverse flex-md-nowrap flex-row flex-lg-column justify-content-center align-items-center align-items-lg-end pr-lg-4">
      <img class="profile-pic rounded-circle img-fluid d-none d-md-block mb-lg-4 mr-auto mr-lg-0 ml-lg-auto" src="../../assets/profile-pic.jpg">
      <div class="d-print-none d-flex d-lg-block mx-auto">
        <b-nav-item to="/" exact>About</b-nav-item>
        <b-nav-item to="skills">Skills</b-nav-item>
        <b-nav-item to="experience">Experience</b-nav-item>
        <b-nav-item to="portfolio">Portfolio</b-nav-item>
      </div>
        <div class="contact-area d-flex align-items-center pt-lg-4 text-green">
          <a class="nav-link d-inline" :href="'mailto:' + email" aria-label="Email"><font-awesome-icon icon="envelope"/></a>
          <span class="d-none d-lg-inline"> | </span>
          <a class="nav-link d-inline" :href="'tel:' + phone" aria-label="Phone"><font-awesome-icon icon="mobile"/></a>
          <span class="d-none d-lg-inline"> | </span>
          <a class="nav-link d-inline" :href="githubUrl" target="_blank" aria-label="GitHub"><font-awesome-icon :icon="['fab', 'github']"/></a>
        </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  data () {
    return {
      phone: '239-290-4002',
      email: 'montoulieu@icloud.com',
      githubUrl: 'https://github.com/montoulieu'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  .nav-link {
    position: relative;
    padding: 0.25rem 0.5rem;
    color: #49b884;
    font-weight: 900;
    outline: 0;
  }
  @media screen and (min-width: 992px){
    position: fixed;

    .nav > .nav-item .nav-link {
      &::after {
        content: '❮';
        margin-left: 10px;
        opacity: 1;
      }

      &.active { opacity: 0.5; }
    }
  }
}

</style>
