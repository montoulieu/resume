<template>
  <div id="resume" class="container py-3 py-lg-5">
    <b-row>
      <b-col lg="2" order-lg="2" class="nav-area ml-auto pb-3">
        <main-nav/>
      </b-col>
      <b-col md="12" lg="9" xl="8" class="main">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Nav from '@/components/blocks/Nav'
import PageContent from '@/components/blocks/PageContent'

export default {
  name: 'resume',
  components: {
    'main-nav': Nav,
    'page-content': PageContent
  }
}
</script>

<style lang="scss">
$color-brand: #49b884;
$color-dark: #161219;
$color-light: #98a5a3;

@import url('https://fonts.googleapis.com/css?family=K2D:100,300,400,500,700,800');

html {
  @media screen and (min-width: 540px){
    font-size: 18px;
  }
}

body {
  background: $color-dark;  /* fallback for old browsers */
  color: $color-light;
  height: 100vh;
  font-weight: 300;
  font-family: 'K2D', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  svg {
    position: fixed;
    top: 0;
    opacity: 0.35;
    mix-blend-mode: darken;
    z-index: 1;
  }
}

#resume {
  position: relative;
  z-index: 10;
}

.profile-pic {
  width: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

ul {
  list-style: none;
  padding: 0;
}

.list-separators li+li::before {
  content: ' | ';
  position: relative;
  right: 2px;
  opacity: 0.2;
}

a {
  color: $color-brand;
  font-weight: 400;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: $color-brand;
    opacity: 0.5;
  }
}
.font-weight-light {
  font-weight: 100 !important;
}
.font-weight-black {
  font-weight: 900;
}
.text-green {
  color: $color-brand;
}

::selection { background: $color-dark; }
::-moz-selection { background: $color-dark;}
</style>
