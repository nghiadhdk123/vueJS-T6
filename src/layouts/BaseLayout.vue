<template>
  <el-container style="min-height: 100vh; border: 1px solid #eee">
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <el-menu
        router
        :default-active="$route.name"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height:100%"
      >
        <!-- <router-link to="/" tag="li" class="el-menu-item" index="home" exact>
            <i class="el-icon-scissors"></i>
            <span>Quản lý table</span>
        </router-link> -->

         <router-link class="sub-menu" to="/">
              <el-menu-item index="home">
                  <i class="el-icon-s-shop"></i>
                  <span>Quản lý table</span>
              </el-menu-item>
          </router-link>
        
        <el-submenu index="1" disabled>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Quản lý chi nhánh</span>
          </template>
          <el-menu-item-group title="Hoạt đông">
            <el-menu-item index="1-1">Đơn hàng</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Báo cáo">
            <el-menu-item index="1-2">Doanh thu</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <router-link class="sub-menu" to="/input">
              <el-menu-item index="input">
                  <i class="el-icon-s-order"></i>
                  <span>Quản lý input</span>
              </el-menu-item>
          </router-link>
          <router-link class="sub-menu" to="/calendar">
              <el-menu-item index="calendar">
                <i class="el-icon-s-data"></i>
                <span>Báo cáo lịch</span>
              </el-menu-item>
          </router-link>
          <router-link class="sub-menu" to="/loading">
              <el-menu-item index="loading">
                 <i class="el-icon-chicken"></i>
                <span>Loading Page</span>
              </el-menu-item>
          </router-link>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="display: flex;align-items: center;justify-content: space-between;">
        <h2 style="display: inline-block;">
          <slot name="title"></slot>
        </h2>
        <div style="display:flex">
          <el-dropdown-item class="clearfix">
            <i class="el-icon-message-solid"></i>
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>

          <el-dropdown
            style="display: flex !important;align-items: center;justify-content: center;"
          >
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute-584x600.jpg"
              alt
              style="width:30px;height:30px;margin-right:5px;border-radius: 50%;object-fit: cover;"
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
              <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
              <el-dropdown-item>Cấu hình</el-dropdown-item>
              <router-link to="/login" tag="li" class="el-dropdown-menu__item" style="border-top:1px solid #b3c0d11c">Đăng xuất</router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <!-- Nội dung chính -->
        <el-main>
            <slot name="main"></slot>
        </el-main>
      <!-- End NDC -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu-item{
    padding-left: 20px; color: rgb(255, 208, 75); background-color: rgb(0, 21, 41)
}

.sub-menu{
  text-decoration: none;
}
</style>