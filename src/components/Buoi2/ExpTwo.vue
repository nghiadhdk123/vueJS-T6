<template>
    <div>
        <div class="wrapper">
            <table class="tableProduct" border="1">
                <thead>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </thead>
                <tbody v-for="(product,key) in products" :key="key">
                    <td>{{++key}}</td>
                    <td class="name-product"><img :src="product.image" alt="" style="width:50px;height:50px"><a :href="product.image">{{product.name}}</a></td>
                    <td>{{numberFormat(product.price)}}</td>
                    <td>{{product.quantity}}</td>
                    <td>
                        <span v-if="product.quantity > 0" class="available">Còn hàng</span>
                        <span v-else class="unavailable">Hết hàng</span>
                    </td>
                    <td><button @click="addCart(product.id)">Thêm vào giỏ</button></td>
                </tbody>
            </table>

            <div class="cart">
                <h4>Giỏ hàng</h4>
                <table class="cartProduct">
                    <tbody v-for="cart in carts" :key="cart.id">
                        <tr>
                            <td> <img :src="cart.image" alt="" style="width:40px;height: 40px;"> </td>
                            <td class="cart-name-price">
                                <span>{{ nameProduct(cart.name) }}</span>
                                <span>{{numberFormat(cart.price)}}</span>
                            </td>
                            <td>{{cart.quantity}}</td>
                            <td><button @click="deleteCart(cart.id)">Xóa</button></td>
                        </tr>
                    </tbody>
                </table>
                <h3>Tổng tiền: {{numberFormat(sumPrice)}}</h3>
            </div>
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
                        id:1,
                    },
                    {
                        name: 'iPhone 12 Chính Hãng (VN/A)',
                        image: 'https://didongviet.vn/pub/media/catalog/product/i/p/ip12.jpg',
                        price: 21790000,
                        quantity: 123,
                        id:2,
                    },
                    {
                        name: 'iPhone 11 Chính hãng',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2019/10/thumb_iP11_2.jpg',
                        price: 16690000,
                        quantity: 0,
                        id:3,
                    },
                    {
                        name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2014/09/iphone-xr-64gb-quoc-te-moi-95-99.jpg',
                        price: 12190000,
                        quantity: 1023,
                        id:4,
                    },
                    {
                        name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                        image: 'https://galaxydidong.vn/wp-content/uploads/2021/01/iphone-11-pro-galaxydidong.jpg',
                        price: 26500000,
                        quantity: 45,
                        id:5,
                    }
                ],
                carts: [],
            }
        },

        methods: {
            numberFormat(number){
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
            },

            addCart(id)
            {
                let index;
                for (let i = 0;i< this.products.length ; i++){
                    if (this.products[i].id === id){
                        index = i;
                    }
                }

                if(this.products[index].quantity == 0)
                {
                    alert('Sản phẩm hết hàng rùi!!');
                }else{
                    if(this.checkList(id))
                    {
                        for(let i = 0 ; i < this.carts.length ; i++)
                        {
                           if (this.carts[i].id === id){
                                this.carts[i].quantity++;
                                this.products[index].quantity--;
                            }
                        }
                    }else{
                        this.carts.push({
                            id: this.products[index].id,
                            name: this.products[index].name,
                            image: this.products[index].image,
                            price: this.products[index].price,
                            quantity: 1,
                        })
                        this.products[index].quantity--;
                    }
                }
            },

            deleteCart(id) {
                // alert('Delelte');
                for (let i = 0;i< this.carts.length ; i++){
                    if (this.carts[i].id === id){
                        this.carts.splice(i,1);
                    }
                }
            },

            checkList (id) {
                for (let i = 0;i< this.carts.length ; i++){
                    if (this.carts[i].id === id){
                        return true;
                    }
                }
                return false;
            },

            nameProduct(name) {
                if(name.length > 25)
                {
                    return name.slice(undefined, 25) + '...';
                }else{
                    return name;
                }
            }
        },

        computed: {
            sumPrice() {
                let sum = 0;
                for(let i = 0 ; i < this.carts.length ; i++)
                {
                    sum += this.carts[i].price*this.carts[i].quantity;
                } 
                return sum;
            }
        },
    }
</script>

<style lang="scss" scoped>

    $color: #43d5c4;

    .wrapper{

        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 5% 0;
        
        table{

            width: 50%;
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

                button{
                    background-color: #43d5c4;
                    color:white;
                    font-weight:500;
                    border-radius: 5px;
                    border-style: none;
                    width: 100px;
                    height: 30px;
                }
            }
        }

        .cart{
            width: 49%;
            border: 0.5px solid #8080806b;
            display: flex;
            flex-direction: column;
            align-items: start;
            position: relative;

            h4{
                padding-left: 2%;
            }

            .cartProduct{
                width: 100%;
            }

            .cart-name-price{
                display: flex;
                flex-direction: column;
                align-items: self-start;
            }

            h3{
                position: absolute;
                bottom:0;
                padding-left: 2%;
            }
        }
    }
</style>
