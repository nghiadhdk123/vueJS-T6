<template>
  <BaseLayoutVue>
    <template #title>Quản lý sản phẩm</template>

    <template #main>
      
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="Date" width="180"></el-table-column>
          <el-table-column prop="name" label="Name" width="180"></el-table-column>
          <el-table-column prop="address" label="Address"></el-table-column>
        </el-table>
        <el-pagination
          background
          layout="total,prev, pager, next, jumper"
          :total="50"
          :page-size="1"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          style="text-align: right;margin-top: 2%;"
        ></el-pagination>
      
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
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    };
    return {
      tableData: Array(5).fill(item)
    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },

    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
  }
};
</script>

<style lang="scss" scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>