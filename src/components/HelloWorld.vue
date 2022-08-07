<template>
  <div>
    <h1>Giá trị count : {{count}}</h1> 
    <button @click="change()">CLick ME</button>
    <ul>
      <li v-for="task in doneTodo" :key="task.id">
        {{task.text}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

  export default {
    mounted () {
      // console.log(this.$store.getters.findTodo(2));
      console.log(this.findTodo(2));
    },
    computed: {
      ...mapState([
        'count'
      ]),

      ...mapGetters([
        'doneTodo',
        'findTodo'
      ]),
    },

    methods: {
      ...mapMutations([
        'ChangeCount',
      ]),

      change(){

          let input = {
            number: 10,
            name: 'T'
          };
          this.ChangeCount(input);
        }
    },
  }
</script>

<style lang="scss" scoped>

</style>