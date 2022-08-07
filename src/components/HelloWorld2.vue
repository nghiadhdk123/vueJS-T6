<template>
  <div>
    <h1>Giá trị count : {{count}}</h1> 
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'count'
      ])
    },
  }
</script>

<style lang="scss" scoped>

</style>