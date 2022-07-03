<template>
    <div>
        <div class="wrapper">
            <div class="close">
                <input type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="search" @keyup.enter="FindProduct()"><span class="clear" @click="clear()" v-show="available">X</span>
            </div>
            <table border="1">
                <thead>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                </thead>
                <tbody v-if="empty == '' && save">
                    <td colspan="5">Không tìm thấy sản phẩm</td>
                </tbody>
                <tbody v-else-if="empty == ''" v-for="(product,index) in products" :key="index">
                    <td>{{++index}}</td>
                    <td class="name-product"><img :src="product.image" alt="" style="width:50px;height:50px"><a :href="product.image">{{product.name}}</a></td>
                    <td>{{numberFormat(product.price)}}</td>
                    <td>{{product.quantity}}</td>
                    <td>
                        <span v-if="product.isAvailable" class="available">Còn hàng</span>
                        <span v-else class="unavailable">Hết hàng</span>
                    </td>
                </tbody>
                <tbody v-else v-for="(product,key) in empty" :key="key">
                    <td>{{++key}}</td>
                    <td class="name-product"><img :src="product.image" alt="" style="width:50px;height:50px"><a :href="product.image">{{product.name}}</a></td>
                    <td>{{numberFormat(product.price)}}</td>
                    <td>{{product.quantity}}</td>
                    <td>
                        <span v-if="product.isAvailable" class="available">Còn hàng</span>
                        <span v-else class="unavailable">Hết hàng</span>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                    {
                        name: 'iPhone 12 Pro Max Chính Hãng',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2020/11/thumb_IP12Pro_4.jpg',
                        price: 32990000,
                        quantity: 566,
                        isAvailable: true
                    },
                    {
                        name: 'iPhone 12 Chính Hãng (VN/A)',
                        image: 'https://didongviet.vn/pub/media/catalog/product/i/p/ip12.jpg',
                        price: 21790000,
                        quantity: 123,
                        isAvailable: true
                    },
                    {
                        name: 'iPhone 11 Chính hãng',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2019/10/thumb_iP11_2.jpg',
                        price: 16690000,
                        quantity: 0,
                        isAvailable: false
                    },
                    {
                        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2014/09/iphone-xr-64gb-quoc-te-moi-95-99.jpg',
                        price: 12190000,
                        quantity: 1023,
                        isAvailable: true
                    },
                    {
                        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2021/01/iphone-11-pro-galaxydidong.jpg',
                        price: 26500000,
                        quantity: 45,
                        isAvailable: true
                    }
                ],

                search: '',
                available: false,
                empty: [],
                save: '',
            }
        },

        methods: {
            numberFormat(number){
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
            },

            clear() {
                this.search = '';
            },

             FindProduct() {
                this.empty = this.products.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
                this.save = this.search  
                
            }
        },

        watch: {
            search(value) {
                if(value != '')
                {
                    this.available = true;
                }else{
                    this.available = false;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

    $color: #43d5c4;

    .wrapper{

        width: 70%;
        margin: 0 auto;

        .close{

            float: left;
            width: 35%;
            height: 30px;
            margin-bottom: 2%;
            display: flex;
            align-items: center;
            position: relative;

            input{
                width: 100%;
                height: 100%;
                outline: none;
                border: 0.5px solid;
                color:gray;
                padding: 1% 0% 1% 2%;
            }

            input:hover{
                border: 0.5px solid $color;
            }

            input:focus{
                border: 0.5px solid $color;
            }

            .clear{
                cursor: pointer;
                position: absolute;
                right: 3%;
            }
        }

        

        table{
            width: 100%;
            margin:0 auto;

            .name-product{
                display: flex;
                justify-content: start;
                align-items: center;

                a{
                    text-decoration: none;
                }
            }

            td{

                .available{
                    color:#43d5c4
                }

                .unavailable{
                    color:#f65a74
                }
            }
        }
    }
</style>
