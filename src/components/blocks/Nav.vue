<template>
  <div class="nav-container">
    <b-nav class="text-right flex-wrap-reverse flex-md-nowrap flex-row flex-lg-column justify-content-center align-items-center align-items-lg-end pr-lg-4">
      <img class="profile-pic rounded-circle img-fluid mb-4 d-none d-md-block mr-auto mr-lg-0 ml-lg-auto" src="../../assets/profile-pic.jpg">
      <b-nav-item to="/" exact>About</b-nav-item>
      <b-nav-item to="skills">Skills</b-nav-item>
      <b-nav-item to="experience">Experience</b-nav-item>
      <b-nav-item to="portfolio">Portfolio</b-nav-item>
      <b-nav-item :href="githubUrl" target="_blank">Github</b-nav-item>
      <div class="contact-area d-flex align-items-center pt-lg-4">
        <a class="nav-link d-inline" :href="'mailto:' + email">Email</a>
        <span class="d-none d-lg-inline"> | </span>
        <a class="nav-link d-inline" :href="'tel:' + phone">Call</a>
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
      email: 'pi.mont@icloud.com',
      githubUrl: 'https://github.com/pi-mont'
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
