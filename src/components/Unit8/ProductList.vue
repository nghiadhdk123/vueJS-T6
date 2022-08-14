<template>
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="Id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price">
      </el-table-column>
    </el-table>
</template>

<script>
// import axios from 'axios'
import api from '../../api'
export default {
 data() {
        return {
          tableData: []
        }
      },

      mounted () {
        // axios({
        //     method:'get',
        //     url: 'http://vuecourse.zent.edu.vn/api/products',
        // })
        // axios.get('http://vuecourse.zent.edu.vn/api/products').then((res) => {
        //     this.tableData = res.data.data.data;
        // }).catch((err) => {
        //     console.log(err);
        // });

        api.getProduct()
            .then((res) => {
                this.tableData = res.data.data.data;
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

    // let data = {
    //     name:'Yasuo 2k1',
    //     price:20000,
    //     description: 'Ha sa gi',
    // }
    //     api.saveProduct(data).then((res) => {
    //         console.log(res);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
      },
}
</script>

<style>

</style>