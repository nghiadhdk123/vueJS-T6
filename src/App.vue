<template>
  <div id="app">
    <HelloWorld/>
    <ExpOneVue></ExpOneVue>
    <ExpTwoVue></ExpTwoVue>
    <ExpThreeVue></ExpThreeVue>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExpOneVue from './components/ExpOne.vue'
import ExpTwoVue from './components/ExpTwo.vue'
import ExpThreeVue from './components/ExpThree.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ExpOneVue,
    ExpTwoVue,
    ExpThreeVue
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
