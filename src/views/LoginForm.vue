<template>
  <!-- <LoginVue>
  <template v-slot:default>-->
  <form class="form-login" @submit.prevent="Login()">
    <input type="text" v-model="data.email" placeholder="Email" />
    <span class="error">{{ errors[0].errorEmail }}</span>
    <input type="password" v-model="data.password" placeholder="Mật khẩu" />
    <span class="error">{{ errors[1].errorPassword }}</span>
    <router-link class="forgetPassword" to="/forget-password">Quên mật khẩu ?</router-link>
    <el-button type="primary" native-type="submit">Đăng nhập</el-button>
  </form>
  <!-- </template>
  </LoginVue>-->
</template>

<script>
// import LoginVue from '@/layouts/Login.vue'
export default {
  components: {
    // LoginVue,
  },
  data() {
    return {
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        fullscreenLoading: false,
      data: {
        email: "",
        password: ""
      },

      errors: [
        {
          active: false,
          errorEmail: ""
        },
        {
          active: false,
          errorPassword: ""
        }
      ]
    };
  },

  methods: {
    Login() {
      if (this.data.email == "") {
        this.errors[0].errorEmail = "Email không được phép bỏ trống.";
        this.errors[0].active = true;
      } else if (!this.ValidateEmail(this.data.email)) {
        this.errors[0].errorEmail = "Email không đúng định dạng.";
        this.errors[0].active = true;
      }

      if (this.data.password == "") {
        this.errors[1].errorPassword = "Mật khẩu không được phép bỏ trống.";
        this.errors[1].active = true;
      }

      if (this.errors[0].active == false && this.errors[1].active == false) {
        this.$router.push({ name: "home" });
      }
    },

    ValidateEmail(email) {
      if (this.reg.test(email)) {
        return true;
      }
      return false;
    },

  },

  watch: {
    "data.email"(value) {
      if (value.length >= 0) {
        this.errors[0].errorEmail = "";
        this.errors[0].active = false;
      }
    },
    "data.password"(value) {
      if (value.length >= 0) {
        this.errors[1].errorPassword = "";
        this.errors[1].active = false;
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