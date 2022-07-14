<template>
    <el-container>
        <el-header>
            <slot name="header"></slot>
        </el-header>
        <!-- Menu  -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Trang chủ</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Thể thao</template>
                <el-menu-item index="2-1">Bóng đá trong nước</el-menu-item>
                <el-menu-item index="2-2">Bóng đá Châu Âu</el-menu-item>
                <el-menu-item index="2-3">Võ thuật</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">Các môn thể thao khác</template>
                    <el-menu-item index="2-4-1">Xe lăn</el-menu-item>
                    <el-menu-item index="2-4-2">Bơi lội</el-menu-item>
                    <el-menu-item index="2-4-3">Bóng chuyển</el-menu-item>
                    <el-menu-item index="2-4-4">Liên quân Mobile</el-menu-item>
                    <el-menu-item index="2-4-5">Liên minh huyền thoại</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">Sức khỏe</template>
                <el-menu-item index="3-1">Kiến thức giới tính</el-menu-item>
                <el-menu-item index="3-2">Làm đẹp</el-menu-item>
                <el-menu-item index="3-3">Đại dịch Covid-19</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">Phát luật</el-menu-item>
            <el-menu-item index="5">Du lịch</el-menu-item>
            <el-menu-item index="6">Giáo dục</el-menu-item>
            <el-menu-item index="7">Văn hóa</el-menu-item>
            <el-menu-item index="8">Công nghệ</el-menu-item>
            <el-menu-item index="9">Giải trí</el-menu-item>
            <el-menu-item index="10">Anime</el-menu-item>
        </el-menu>
        <!-- End menu -->
        <el-main>
            <slot name="main"></slot>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
        };
    },

    methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
    }
}
</script>

<style lang="scss" scoped>

.el-header{
    height: unset !important;
    padding: 0 !important;
}

.el-main{
    padding:0 !important;
}
</style>