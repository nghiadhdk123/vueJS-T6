<template>
    <div>
        <h1>{{title}}</h1><button @click="ChangeTT('Sản phẩm siêu cấp')">Change Title</button>
        <table border="1">
            <thead>
                <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>#</th>
            </thead>
            <tbody>
                <tr v-for="(product,index) in products" :key="product.name">
                    <td>{{product.name}}</td>
                    <td>{{product.quantity}}</td>
                    <td>{{product.price}}</td>
                    <td>{{++index}}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
    export default {
        name:'PageProduct',
        computed: {
            ...mapState('product',['products','title'])
        },
        methods: {
            ...mapMutations('product',['changeTitle']),
            ChangeTT(data) {
                this.changeTitle(data);
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>