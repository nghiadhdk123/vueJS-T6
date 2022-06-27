<template>
    <div>
        <div class="wrapper">
            <div class="title">
                <label for="">Nhập tiêu đề</label>
                <input type="text" name="title" id="" placeholder="Yêu cầu nhập tiêu đề" v-model="title">
                <label for="">Nhập nội dung</label>
                <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>
            </div>
            <div class="content">
                <h2 class="title_content">{{ title }}</h2>
                <p class="content_son" v-html="content"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       data() {
        return {
            title: '',
            content: '',
        }
       },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;

        .title{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            border: 1px solid;
            padding: 2%;
            border-radius: 5px;

            label{
                text-align: left;
                margin: 2% 0;
                font-weight: bold;
                color: #0000ff96;
            }

            input{
                padding:5%;
            }
        }

        .content{
            width: 50%;
            padding: 2%;
            height: 250px;
            border: 1px dotted;
            border-radius: 5px;
            text-align: start;
        }
    }
</style>