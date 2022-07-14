<template>
  <div id="app">

    <!-- Học nhóm -->
     <!-- <StudyOne></StudyOne> -->
    <!-- <StudyTwo></StudyTwo> -->
    <!-- <StudyThree></StudyThree> -->

    <!-- <HelloWorld/>
    <ExpOneVue></ExpOneVue>
    <ExpTwoVue></ExpTwoVue>
    <ExpThreeVue></ExpThreeVue> -->
    <!-- <TheoryDay2Vue></TheoryDay2Vue> -->
    <!-- <ExpOneVueUnit2></ExpOneVueUnit2>
    <ExpTwoVueUnit2></ExpTwoVueUnit2> -->

    <!-- Buổi 3 -->
    <!-- <TheoryOneVue></TheoryOneVue> -->
    <!-- <TodoListVue></TodoListVue> -->
    <!-- <ExerciseVue></ExerciseVue> -->

    <!-- Buổi 4 -->
    <!-- <TheoryOneDay4Vue>
      <template #default="slotProps" >
          {{slotProps.data.text}}
      </template>
    </TheoryOneDay4Vue> -->
    <!-- <ExpOneVueUnit4></ExpOneVueUnit4> -->

    <!-- Bài 1 buổi 4 -->
    <!-- <BaseLayoutVue></BaseLayoutVue> -->
    <ProductPageVue></ProductPageVue>

    <!-- Bài 2 buổi 4 -->
    <!-- <BaseLayoutVue2></BaseLayoutVue2> -->
    <!-- <NewsDetailPageVue></NewsDetailPageVue> -->
  </div>
</template>

<script>

//Buổi học 1
// import HelloWorld from './components/HelloWorld.vue'
// import ExpOneVue from './components/ExpOne.vue'
// import ExpTwoVue from './components/ExpTwo.vue'
// import ExpThreeVue from './components/ExpThree.vue'

//Học nhóm
// import StudyOne from './components/HocNhom/ExpOne.vue'
// import StudyTwo from './components/HocNhom/ExpTwo.vue'
// import StudyThree from './components/HocNhom/ExpThree.vue'

//Buổi học 2
// import TheoryDay2Vue from './components/Buoi2/TheoryDay2.vue'
// import ExpOneVueUnit2 from './components/Buoi2/ExpOne.vue'
// import ExpTwoVueUnit2 from './components/Buoi2/ExpTwo.vue'

//Buổi học 3
// import TheoryOneVue from './components/Unit3/TheoryOne.vue'
// import TodoListVue from './components/Unit3/TodoList.vue'
// import ExerciseVue from './components/Unit3/ExerciseProduct.vue'

//Buổi 4
// import TheoryOneDay4Vue from './components/Unit4/TheoryOne.vue'
// import ExpOneVueUnit4 from './components/Unit4/ExpOne.vue'
//Bài 1 buổi 4
// import BaseLayoutVue from './components/Unit4/BaseLayout.vue'
import ProductPageVue from './components/Unit4/BT1/ProductPage.vue'
//Bài 2 buổi 4
// import BaseLayoutVue2 from './components/Unit4/BT2/BaseLayout.vue'
// import NewsDetailPageVue from './components/Unit4/BT2/NewsDetailPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ExpOneVue,
    // ExpTwoVue,
    // ExpThreeVue,
    // TheoryDay2Vue

    // Học nhóm
    // StudyOne,
    // StudyTwo
    // StudyThree,

    // ExpOneVueUnit2,
    // ExpTwoVueUnit2
    // TheoryOneVue
    // TodoListVue,
    // ExerciseVue
    // TheoryOneDay4Vue,
    // ExpOneVueUnit4
    // BaseLayoutVue,
    ProductPageVue,
    // BaseLayoutVue2
    // NewsDetailPageVue
  }
}
</script>

<style>

*{
  margin: 0;
  padding:0;
}
</style>
