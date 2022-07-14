<template>
    <BaseLayoutVue>

        <!-- Ảnh banner -->
        <template v-slot:header>
            <el-carousel height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in titles" :key="item">
                    <!-- <h3 class="medium">{{ item }}</h3> -->
                    <!-- <img class="" :src="item" alt=""> -->
                    <div class="img-title" :style="{ backgroundImage: 'url(' + item + ')' }"></div>
                </el-carousel-item>
            </el-carousel>
        </template>

        <!-- Nội dung chính -->
        <template v-slot:main>
            <el-row :gutter="20" style="margin:0 !important">
                <el-col :span="6" style="padding:0 !important">
                    <div class="grid-content bg-purple">
                        <img :src="images[0]" class="image-qc" alt="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <p class="menu-main">Trang chủ / Giải trí / Giới thiệu game Counter: Side</p>
                        <img class="image-main" :src="images[2]" alt="">
                        <p class="text-main">Counter: Side là tựa game ARPG của Nexon vốn được phát triển và tiến hành thử nghiệm từ năm
                            2018. Kể từ 4/2 vừa qua, game chính thức được phát hành ở Hàn Quốc và ngay lập tức đã tạo
                            nên cơn sốt trên các kho ứng dụng tải về. Từ khi xuất hiện, Counter: Side đã đứng đầu trong
                            danh sách các game miễn phí của App Store và sau đó là ứng dụng game phổ biến nhất trên
                            Google Play. Tính đến chiều 5/2, xếp hạng doanh số của game trên App Store cũng lọt Top đầu.
                        </p>
                    </div>
                </el-col>
                <el-col :span="6" style="padding:0 !important">
                    <div class="grid-content bg-purple">
                        <img :src="images[1]" class="image-qc" alt="">
                    </div>
                </el-col>
            </el-row>
        </template>
    </BaseLayoutVue>
</template>

<script>
import BaseLayoutVue from './BaseLayout.vue'
export default {
    components: {
        BaseLayoutVue,
    },

    data() {
        return {
            titles: [
                require('../../../assets/images/anh1.jpg'),
                require('../../../assets/images/anh2.jpg'),
                require('../../../assets/images/anh3.jpg'),
            ],

            images: [
                require('../../../assets/images/anhqc1.png'),
                require('../../../assets/images/anhqc2.jpg'),
                require('../../../assets/images/anhqc3.png'),
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

$colorText:#9a939d;

.img-title {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.image-qc {
    width: 100%;
    height: 400px;
    // object-fit: cover;
}

.menu-main{
    color: $colorText;
    margin: 2% 0 3% 0;
}

.text-main
{
    color:$colorText;
    margin-top: 3%;
}

.image-main {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>