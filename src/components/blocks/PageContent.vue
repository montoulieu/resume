<template>
  <section class="page-content pb-4">
    <h1 v-if="heading" class="text-green">{{ heading }}</h1>
    <h2 v-if="subheading" class="font-weight-normal h4">{{ subheading }}</h2>
    <div v-if="description" class="" v-html="description"></div>
  </section>
</template>

<script>
export default {
  name: 'page-content',
  props: ['heading', 'subheading', 'description']
}
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 2px;

  @media screen and (min-width: 540px){
    &::before {
      content: ':// ';
      // position: absolute;
      // left: -3rem;
      letter-spacing: -1px;
    }
  }
}
</style>
