<template>
  <div>
    <BaseLayoutVue>
      <template #title>Quản lý Input</template>

      <template #main>
        <el-input placeholder="Please input"></el-input>
        <el-input placeholder="Please input" :disabled="true"></el-input>
        <el-input placeholder="Please input" clearable></el-input>
        <el-input placeholder="Please input password" v-model="input" show-password></el-input>
        <el-input-number  v-model="num" :min="1" :max="100"></el-input-number>
      </template>
    </BaseLayoutVue>
  </div>
</template>

<script>
import BaseLayoutVue from "@/layouts/BaseLayout.vue";
export default {
  components: {
    BaseLayoutVue
  },
  data() {
      return {
        num: 1
      };
    },
};
</script>

<style lang="scss" scoped>
</style>