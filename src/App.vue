<template>
  <div id="app">
      <router-view></router-view>
      <!-- <ExpFourStudyVue></ExpFourStudyVue> -->
      <!-- <ProductListVue></ProductListVue> -->
  </div>
</template>

<script>
// import ExpFourStudyVue from './components/HocNhom/ExpFourStudy.vue';
// import ProductListVue from './components/Unit8/ProductList.vue';
  export default {
      components: {
        // ExpFourStudyVue
        // ProductListVue
      },

      mounted () {
        // alert('Thêm /products để xem bài tập Unit9 ! Xin cảm ơn');
      },
  }
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
</style>
