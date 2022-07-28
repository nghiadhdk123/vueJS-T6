<template>
  <div class="container">
    <div class="cloud">
        <div class="rain">
            <span class="dot" style="--i:11"></span>
            <span class="dot" style="--i:12"></span>
            <span class="dot" style="--i:10"></span>
            <span class="dot" style="--i:14"></span>
            <span class="dot" style="--i:18"></span>
            <span class="dot" style="--i:16"></span>
            <span class="dot" style="--i:19"></span>
            <span class="dot" style="--i:20"></span>
            <span class="dot" style="--i:19"></span>
            <span class="dot" style="--i:10"></span>
            <span class="dot" style="--i:16"></span>
            <span class="dot" style="--i:14"></span>
            <span class="dot" style="--i:18"></span>
            <span class="dot" style="--i:11"></span>
            <span class="dot" style="--i:13"></span>
            <span class="dot" style="--i:15"></span>
            <span class="dot" style="--i:17"></span>
            <span class="dot" style="--i:13"></span>
            <span class="dot" style="--i:15"></span>
            <span class="dot" style="--i:19"></span>
            <span class="dot" style="--i:10"></span>
            <span class="dot" style="--i:16"></span>
            <span class="dot" style="--i:14"></span>
            <span class="dot" style="--i:18"></span>
        </div>
    </div>
    <div class="main">
      <img src="../assets/images/logoflixgo.png" alt />
      <!-- <slot></slot> -->
      <router-view to="/form"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 5%;

  .cloud {
    position: relative;
    width: 30%;
    height: 70px;
    background: white;
    border-radius: 100px;
    margin-bottom: 8%;
  }

  .cloud::before{
    content:'';
    position: absolute;
    top: -50px;
    left:40px;
    width: 50%;
    height: 110px;
    border-radius: 50%;
    background: white;
    box-shadow: 90px 0 0 10px #fff;
  }

  .rain{
    position: relative;
    display: flex;
    z-index: 1;
    padding:0 20px;

    .dot{
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: white;
        margin:0 2px;
        animation:  animate 5s linear infinite;
        animation-duration:  calc(15s / var(--i));
        transform-origin: bottom;
    }

    @keyframes animate {
        0%{
            transform: translateY(0) scale(1);
        }
        70%{
            transform: translateY(300px) scale(1);
        }
        100%{
            transform: translateY(300px) scale(0);
        }
    }
  };

  .main {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 2% 0;
    border-radius: 5px;
    z-index: 2;

    img {
      width: 30%;
      height: auto;
    }
  }
}
</style>