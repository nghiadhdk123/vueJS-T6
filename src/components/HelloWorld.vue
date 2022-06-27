<template>
  <div class="wrapper">
      <div class="login">
          <form class="form_login" action="">
            <label for="">Tên đăng nhập</label>
            <input type="text">
            <label for="">Mật khẩu</label>
            <input type="password">
            <button>Đăng nhập</button>
          </form>
      </div>
      <div class="hello">
        Xin chào
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    display:flex;
    justify-content: space-evenly;
  }

  .form_login{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    padding: 0 5%;
    border: 1px solid;
  }

  .hello{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    padding: 0 5%;
    border: 1px solid;
    align-items: center;
    color:green;
  }
</style>
