<template>
    <div>
        <h1>{{title}}</h1>
        <table border="1">
            <thead>
                <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>#</th>
            </thead>
            <tbody>
                <tr v-for="(order,index) in orders" :key="order.name">
                    <td>{{order.name}}</td>
                    <td>{{order.quantity}}</td>
                    <td>{{order.price}}</td>
                    <td>{{++index}}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name:'PageOrder',
        computed: {
            ...mapState('order',['orders','title'])
        },

    }
</script>

<style lang="scss" scoped>

</style>