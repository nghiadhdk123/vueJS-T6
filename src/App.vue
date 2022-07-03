<template>
  <div id="app">
    <!-- <HelloWorld/>
    <ExpOneVue></ExpOneVue>
    <ExpTwoVue></ExpTwoVue>
    <ExpThreeVue></ExpThreeVue> -->
    <StudyOne></StudyOne>
    <!-- <TheoryDay2Vue></TheoryDay2Vue> -->
    <!-- <StudyTwo></StudyTwo> -->
    <ExpOneVueUnit2></ExpOneVueUnit2>
    <ExpTwoVueUnit2></ExpTwoVueUnit2>
  </div>
</template>

<script>

//Buổi học 1
// import HelloWorld from './components/HelloWorld.vue'
// import ExpOneVue from './components/ExpOne.vue'
// import ExpTwoVue from './components/ExpTwo.vue'
// import ExpThreeVue from './components/ExpThree.vue'

//Học nhóm
import StudyOne from './components/HocNhom/ExpOne.vue'
// import StudyTwo from './components/HocNhom/ExpTwo.vue'

//Buổi học 2
// import TheoryDay2Vue from './components/Buoi2/TheoryDay2.vue'
import ExpOneVueUnit2 from './components/Buoi2/ExpOne.vue'
import ExpTwoVueUnit2 from './components/Buoi2/ExpTwo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ExpOneVue,
    // ExpTwoVue,
    // ExpThreeVue,
    StudyOne,
    // TheoryDay2Vue
    // StudyTwo
    ExpOneVueUnit2,
    ExpTwoVueUnit2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
