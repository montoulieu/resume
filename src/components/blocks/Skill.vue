<template>
  <div class="skill mb-3">
    <h5 class="font-weight-black text-green d-md-inline mr-2">{{ heading }}</h5>
    <ul class="list-separators list-inline d-md-inline">
      <li class="list-inline-item" v-for="item in list" :key="item.id"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skill',
  props: ['heading', 'list']
}
</script>

<style lang="scss" scoped></style>
