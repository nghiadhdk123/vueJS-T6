<template>
    <div class="container">
        <h1>Bài tập thay đổi màu thay Ref</h1>

        <div class="wrapper" ref="colorBoder">

        </div>

        <input v-model="number" type="number">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                number: '',
            }
        },

        watch: {
            number(value) {
                
                if(value >= 0 && value <= 10)
                {
                   this.$refs.colorBoder.style.backgroundColor = 'gray';
                }else if(value >= 11 && value <= 30)
                {
                    this.$refs.colorBoder.style.backgroundColor = 'green';
                }else if(value >= 31 && value <= 50)
                {
                    this.$refs.colorBoder.style.backgroundColor = 'blue';
                }else if(value >= 51 && value <= 70)
                {
                    this.$refs.colorBoder.style.backgroundColor = 'violet';
                }else if(value >= 71 && value <= 90)
                {
                    this.$refs.colorBoder.style.backgroundColor = 'orange';
                }else if(value >= 91 && value <= 100)
                {
                    this.$refs.colorBoder.style.backgroundColor = 'red';
                }
                
                if(value == ''){
                    this.$refs.colorBoder.style.backgroundColor = 'white';
                }
                console.log(value);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        width: 300px;
        height: 300px;
        margin:auto;
        border:1px solid black;
        background-color: white;
    }

    input{
        margin-top: 5%;
    }
</style>