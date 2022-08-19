<template>
  <div class="wrapper">
    <h1>Danh sách sản phẩm</h1>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Ảnh" prop="image">
        <template slot-scope="scope"><img v-if="scope.row.image" :src="link+scope.row.image" alt="" style="width: 100px;height: 100px;border-radius: 10px;"></template>
      </el-table-column>
      <el-table-column label="Tên sản phẩm" prop="name"></el-table-column>
      <el-table-column label="Giá" prop="price">
        <template slot-scope="scope">{{ formatMoney(scope.row.price) }}</template>
      </el-table-column>
      <el-table-column label="Ngày tạo" prop="created_at">
        <template slot-scope="scope">{{moment(scope.row.created_at).format('YYYY-MM-DD')}}</template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-button size="mini" type="primary" @click="dialogFormVisible = true,url = 1">+ Tạo mới</el-button>
          <input type="text" class="input-search" v-model="search" @keyup="getList(currentPage=1)" placeholder="Tìm kiếm sản phẩm">
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEditProduct(scope.row.id),dialogFormUpdateVisible=true">Sửa</el-button>
          <el-button size="mini" type="danger" @click="handleDeleteProduct(scope.$index,scope.row.id)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align:center;margin-top:10px"
      background
      layout="total,prev, pager, next"
      :page-size="5"
      :current-page.sync="currentPage"
      :total="total"
      @current-change="handleCurrentChange">
    </el-pagination>

    <!-- Dialog Created -->
    <el-dialog title="Tạo mới sản phẩm" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Tên sản phẩm" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
          <span class="error" v-if="error.name">{{ error.name[0] }}</span>
        </el-form-item>
        <el-form-item label="Giá sản phẩm" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
          <span class="error" v-if="error.price">{{ error.price[0] }}</span>
        </el-form-item>
        <el-form-item label="Ảnh" :label-width="formLabelWidth">
          <UploadVue @uploadFile="handleUploadFile"
                    @closeFile="handleCloseFile"
                     :data="url">
          </UploadVue>
          <span class="error" v-if="error.image">{{ error.image[0] }}</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal">Hủy</el-button>
        <el-button type="primary" @click="handleCreateProduct()">Tạo mới</el-button>
      </span>
    </el-dialog>

    <!-- Dialog Updated -->
    <el-dialog title="Cập nhật sản phẩm" :visible.sync="dialogFormUpdateVisible">
      <el-form :model="dataUpdate">
        <el-form-item label="Tên sản phẩm" :label-width="formLabelWidth">
          <el-input v-model="dataUpdate.name" autocomplete="off"></el-input>
          <!-- <span class="error" v-if="error.name">{{ error.name[0] }}</span> -->
        </el-form-item>
        <el-form-item label="Giá sản phẩm" :label-width="formLabelWidth">
          <el-input v-model="dataUpdate.price" autocomplete="off"></el-input>
          <!-- <span class="error" v-if="error.price">{{ error.price[0] }}</span> -->
        </el-form-item>
        <el-form-item label="Ảnh" :label-width="formLabelWidth">
            <UploadVue :urlUpdate="urlUpdate" 
                        :link="link"  
                        @closeFile="handleCloseFile"
                        @uploadFile="handleUploadFile">
            </UploadVue>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModalUpdate">Hủy</el-button>
        <el-button type="primary" @click="handleUpdateProduct()">Cập nhật</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from "../../api";
import moment from "moment";
// import helper from '../../helper/index.js';
import {formatMoney} from "../../helper/formatMoney.js";
import UploadVue from "@/components/Unit10/Upload.vue";
export default {
  components: {
    UploadVue,
  },
  data() {
    return {
      tableData: [],
      search: "",
      dialogFormVisible: false,
      dialogFormUpdateVisible: false,
      form: {
        name: "",
        price: "",
      },
      formLabelWidth: "120px",
      error:{},
      dataUpdate:{
        id: "",
        name:"",
        price: "",
      },
      total: 1,
      currentPage: 1,
      file: '',
      url:1,
      urlUpdate: '',
      link:'http://vuecourse.zent.edu.vn/storage/',
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    moment: function() {
      return moment();
    },

    getList() {
      let data = {
        q: this.search,
        page: this.currentPage
      }
        api
      .getProduct(data)
      .then(res => {
        // console.log(res);
        this.tableData = res.data.data.data;
        this.total = res.data.data.total;
      })
      .catch(err => {
        console.log(err);
      });
    },

    open2(message) {
        this.$message({
          message: message,
          type: 'success'
        });
      },

    handleCreateProduct() {
        let data = new FormData();
        data.append('name',this.form.name);
        data.append('price',this.form.price);
        data.append('image',this.file);
  
        api.saveProduct(data).then(() => {
            this.getList();
            this.dialogFormVisible = false;
            this.form.name = '';
            this.form.price = '';
            this.file = '';
            this.url = 0;
            this.open2("Tạo mới thành công !");
        }).catch((err) => {
            console.log(err);
            this.error = err.response.data.error;
        })
    },

    handleDeleteProduct(row,id){
        api.deleteProduct(id).then(() => {
            this.getList();
            this.open2("Xóa thành công !");
        }).catch(() => {
            console.log("Xóa thất bại");
        })
    },

    handleEditProduct(id){
        this.tableData.map((data, index) => {
            if(data.id === id) {
                this.dataUpdate.id = this.tableData[index].id;
                this.dataUpdate.name = this.tableData[index].name;
                this.dataUpdate.price = this.tableData[index].price;
                this.urlUpdate = this.tableData[index].image;
            }
        });
    },
    
    handleUpdateProduct() {
      let data = new FormData();
      data.append('name',this.dataUpdate.name);
      data.append('price',this.dataUpdate.price);
      data.append('id',this.dataUpdate.id);
      if(this.file) {
        data.append('image',this.file);
      }

        api.updateProduct(data).then(() => {
            this.open2("Cập nhật thành công !");
            this.getList();
            this.dialogFormUpdateVisible = false;
            this.file = '';
        }).catch((err) => {
            console.log(err);
        })
    },

    handleCurrentChange(val) {
        this.currentPage = val;
        this.getList();
    },

    handleUploadFile(data) {
      // console.log(data);
      this.file = data;
    },

    handleCloseFile() {
      this.file = '';
      this.urlUpdate = '';
    },

    closeModal() {
      this.dialogFormVisible = false;
      this.file = '';
      this.form.name = '';
      this.form.price = '';
      this.url = 0;
    },

    closeModalUpdate() {
      this.dialogFormUpdateVisible = false;
      this.file = '';
    },
    // helper,
    formatMoney,
  },
  
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: auto;
  padding-top: 5px;

  h1 {
    margin-bottom: 2%;
  }

  .error{
    color:red;
    font-size: 13px;
  }

  .input-search{
    width: 100%;
    padding: 5px 10px;
    outline: none;
    border: 0.5px solid #80808052;
  }

  
}
</style>