<template>
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image">
                <div style="padding: 14px;">
                    <span><slot name="banh"></slot></span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                    </div>
                </div>
            </el-card>
        </el-col>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date()
        };
    }
}
</script>

<style lang="scss" scoped>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>