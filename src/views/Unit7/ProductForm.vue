<template>
  <div class="form-input-data">
    <h2>Sản phẩm</h2>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      label-position="top"
    >
      <el-form-item label="Tên sản phẩm" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Số lượng sản phẩm" prop="quantity">
        <el-input v-model.number="ruleForm.quantity"></el-input>
      </el-form-item>
      <el-form-item label="Đơn giá" prop="price">
        <el-input v-model.number="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" v-if="!active">Tạo mới</el-button>
        <el-button type="primary" @click="updateForm('ruleForm')" v-else>Cập nhật</el-button>
        <el-button @click="resetForm('ruleForm')">Hủy bỏ</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    created () {
        this.$store.watch(() => {
              return this.$store.state.itemUpdate // could also put a Getter here
            },
            (value)=>{
                this.ruleForm.id = value.id;
                this.ruleForm.name = value.name;
                this.ruleForm.quantity = value.quantity;
                this.ruleForm.price = value.price;
            },
            //Optional Deep if you need it
                {
                deep:true
                }
            )
    },
    // updated () {
    //   console.log('Update');
    // },

  data() {
    return {
      ruleForm: {
        id: "",
        name: "",
        quantity: "",
        price: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Tên sản phẩm không được phép bỏ trống.",
            trigger: "blur"
          }
        ],
        quantity: [
          {
            required: true,
            message: "Số lượng sản phẩm không được phép bỏ trống.",
            trigger: "blur"
          },
          { type: "number", message: "Số lượng sản phẩm phải là số." }
        ],
        price: [
          {
            required: true,
            message: "Đơn giá sản phẩm không được phép bỏ trống.",
            trigger: "blur"
          },
          { type: "number", message: "Đơn giá sản phẩm phải là số." }
        ]
      }
    };
  },
  computed: {
    ...mapState(["active","itemUpdate"]),
  },
  methods: {
    ...mapMutations(["addItem","resetItem","itemUpdateData"]),

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            let data = {
                id: Date.now(),
                name: this.ruleForm.name,
                quantity: this.ruleForm.quantity,
                price: this.ruleForm.price,
            }
          this.addItem(data);
          this.resetForm(formName);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
        this.resetItem();
    },

    updateForm(formName) {
      this.itemUpdateData(this.ruleForm);
      this.$refs[formName].resetFields();
      this.resetItem();
    }
  },
};
</script>

<style lang="scss" scoped>
.form-input-data {
  width: 49%;
}
</style>