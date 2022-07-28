<template>
  <BaseLayoutVue>
    <template #title>Quản lý lịch</template>

    <template #main>
      <el-calendar v-model="value"></el-calendar>
    </template>
  </BaseLayoutVue>
</template>

<script>
import BaseLayoutVue from "@/layouts/BaseLayout.vue";
export default {
  components: {
    BaseLayoutVue
  },
  data() {
    return {
      value: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>