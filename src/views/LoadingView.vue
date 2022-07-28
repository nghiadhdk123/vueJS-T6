<template>
  <BaseLayoutVue>
    <template #title>Loading Page</template>

    <template #main>
      <div class="infinite-list-wrapper" style="overflow:auto">
        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
        </ul>
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
      </div>
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
      count: 10,
      loading: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>