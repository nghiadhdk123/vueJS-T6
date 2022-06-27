<template>
    <div>
        <div class="wrapper">
            <div class="formInfo">
                <form>
                    <label for="">Nhập họ tên</label>
                    <input type="text" name="name" v-model="inputData.name">
                    <label for="">Ngày sinh</label>
                    <input type="date" name="date" v-model="inputData.date">
                    <label for="">Số điện thoại</label>
                    <input type="text" name="phone" v-model="inputData.phone">
                    <label for="">Link Facebook</label>
                    <input type="text" name="linkFB" v-model="inputData.linkFB">
                    <div class="buttons">
                        <button type="button" @click.prevent="SaveData()">Lưu</button>
                        <button @click.prevent="ClearData">Xóa</button>
                    </div>
                </form>
            </div>
            <div class="contentInfo">
                <h3>Họ và tên: {{ outputData.name }}</h3>
                <h3>Ngày sinh: {{ outputData.date }}</h3>
                <h3>Số điện thoại: {{ outputData.phone }}</h3>
                <h3>Link Facebook: <a :href="outputData.linkFB" target="_blank">{{ outputData.linkFB }}</a></h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               inputData: {
                    "name":'',
                    "date":'',
                    "phone":'',
                    "linkFB":'',
               },

               outputData: {
                    "name":'',
                    "date":'',
                    "phone":'',
                    "linkFB":'',
               },
            }
        },

        methods: {
            SaveData() {
                this.outputData.name = this.inputData.name
                this.outputData.date = this.inputData.date
                this.outputData.phone = this.inputData.phone
                this.outputData.linkFB = this.inputData.linkFB
            },

            ClearData() {
                // this.outputData = ''
                // this.inputData = ''
                this.outputData.name = ''
                this.inputData.name = ''
                this.outputData.date = ''
                this.inputData.date = ''
                this.outputData.phone = ''
                this.inputData.phone = ''
                this.outputData.linkFB = ''
                this.inputData.linkFB = ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{

        display: flex;
        justify-content: space-evenly;

        .formInfo{

            width: 50%;
            border:1px solid;

            form{
                display: flex;
                flex-direction: column;
                align-items: start;
                padding: 5%;

                label{
                    width: 100%;
                    text-align: start;
                    margin:3% 0;
                    font-weight: bold;
                }

                input{
                    width: 100%;
                    height: 30px;
                    text-indent: 10px;
                }

                .buttons{

                    margin-top: 2%;

                    button{
                        width: 60px;
                        height: 35px;
                        border-radius: 5px;
                        border-color: unset;
                        background-color: #0080dd;
                        color:white;
                        cursor: pointer;
                    }

                    button:nth-child(2)
                    {
                        background-color: red;
                    }
                }
                
            }
        }

        .contentInfo{
            width: 50%;
            text-align: start;
            border:1px solid;
            padding: 5%;
        }
    }
</style>