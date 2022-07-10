<template>
    <div>
        <h1>Hello World</h1>
        <!-- <table border="1">
            <thead>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
            </thead>
            <tbody v-for="(product,index) in products" :key="index">
                <td>{{ index }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }} VNĐ</td>
            </tbody>
        </table>

        <h1>Bài 2</h1>
        <table border="1">
            <thead>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
            </thead>
            <tbody v-for="(product,index) in InputPrice" :key="index">
                <td>{{ index }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }} VNĐ</td>
            </tbody>
        </table> -->
        <!-- <div>{{ InputPrice }}</div> -->
        <div class="loginForm">
            <span>
                <input type="text" :class="{inputError:requestName}" placeholder="Your Name*" v-model="name">
                <span class="error" v-show="requestName">Tên không được phép bỏ trống</span>
            </span>
            <span>
                <input type="password" placeholder="Your Password*" v-model="password">
                <span class="error" v-show="requestPassword">Mật khẩu không được phép bỏ trống</span>
            </span>
            <span>
                <input type="text" placeholder="Your Phone*" v-model="phone">
                <span class="error" v-show="requestPhone">{{errorPhone}}</span>
            </span>
            <span>
                <input type="password" placeholder="Confirm Password*" v-model="confirmPassword">
                <span class="error" v-show="requestConfirmPassword">{{errorPw}}</span>
            </span>
            <button @click="Register()">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {
                        name: 'Iphone 8',
                        price: 7000000
                    },
                    {
                        name: 'Iphone 8 Plus',
                        price: 8500000
                    },
                    {
                        name: 'Iphone 12 ProMax',
                        price: 15000000
                    },
                ],
                name:'',
                phone:'',
                password:'',
                confirmPassword:'',
                requestName:false,
                requestPhone:false,
                requestPassword:false,
                requestConfirmPassword:false,
                errorPhone: '',
                errorPw: '',
            }
        },

        computed: {
            // InputPrice() {
            //     let result = this.products.filter(item => item.price > 8000000)

            //     // console.log(result);
            //     return result;
            // }
        },

        methods: {
            Register() {
                if(this.name == '')
                {
                    this.requestName = true;
                }
                
                if(this.phone == '')
                {
                    this.requestPhone = true;
                    this.errorPhone = 'Số điện thoại không được phép bỏ trống';
                }else if(isNaN(this.phone))
                {
                    this.requestPhone = true;
                    this.errorPhone = 'Số điện thoại phải là số';
                }
                
                if(this.password == '')
                {
                    this.requestPassword = true;
                }
                
                if(this.confirmPassword == '')
                {
                    this.requestConfirmPassword = true;
                    this.errorPw = 'Xác thực mật khẩu không được phép bỏ trống'
                }else if(this.confirmPassword != this.password)
                {
                    this.requestConfirmPassword = true;
                    this.errorPw = 'Mật khẩu không trùng nhau.'
                }else if(this.requestName == false && this.requestPhone == false && this.requestPassword == false && this.requestConfirmPassword == false)
                {
                    alert("Đăng kí thành công");
                }
            }
        },

        watch: {
            name(value) {
                if(value.length >= 0)
                {
                    this.requestName = false;
                }
            },

            phone(value) {
                if(value.length >= 0)
                {
                    this.requestPhone = false;
                }
            },

            password(value) {
                if(value.length >= 0)
                {
                    this.requestPassword = false;
                }
            },

            confirmPassword(value) {
                if(value.length >= 0)
                {
                    this.requestConfirmPassword = false;
                }
            },


        },
    }
</script>

<style lang="scss" scoped>
    .loginForm{
        width: 70%;
        margin: 0 auto;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;

        span{
            display: inline-block;
            width: 49%;
            margin-bottom: 1%;

            input{
                width: 100%;
                height: 25px;
                outline: none;
                border-radius: 10px;
                text-indent: 10px;
            }

            .inputError{
                border-color:red;
            }

            .error{
                color:red;
                font-size: 13px;
            }
        }
    }
</style>