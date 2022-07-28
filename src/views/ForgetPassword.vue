<template>
  <form class="form-login" @submit.prevent="SendMail()">
    <input type="text" v-model="data.email" placeholder="Email" />
    <span class="error">{{ errors[0].errorEmail }}</span>
    <router-link class="forgetPassword" to="/login">Đăng nhập</router-link>
    <el-button type="primary" native-type="submit">Gửi email</el-button>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

      data: {
        email: ""
      },

      errors: [
        {
          active: false,
          errorEmail: ""
        }
      ]
    };
  },

  methods: {
    SendMail() {
      if (this.data.email == "") {
        this.errors[0].errorEmail = "Email không được phép bỏ trống.";
        this.errors[0].active = true;
      } else if (!this.ValidateEmail(this.data.email)) {
        this.errors[0].errorEmail = "Email không đúng định dạng.";
        this.errors[0].active = true;
      }

      if (this.errors[0].active == false) {
        this.open2();
        this.data.email = '';
      }
    },

    ValidateEmail(email) {
      if (this.reg.test(email)) {
        return true;
      }
      return false;
    },

    open2() {
      this.$message({
        message: "Gửi email thay đổi mật khẩu thành công ! Vui lòng kiểm tra email của bạn.",
        type: "success"
      });
    }
  },

  watch: {
    "data.email"(value) {
      if (value.length >= 0) {
        this.errors[0].errorEmail = "";
        this.errors[0].active = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-login {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  .el-button {
    padding: 2%;
    margin: 2% 0;
    outline: none;
  }

  input {
    border: 0.2px solid #80808059;
  }

  .error {
    font-size: 12px;
    color: red;
  }

  .forgetPassword {
    color: #409eff;
    font-weight: 500;
    text-align: right;
    text-decoration: none;
    margin-bottom: 1%;
  }
}
</style>