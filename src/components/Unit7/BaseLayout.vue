<template>
    <div>
        <div class="wrapper">
            <ProductListVue/>
            <CartVue/>
        </div>

        <div class="container">
            <ProductFormVue/>
            <ProductItemVue/>
        </div>
    </div>
</template>

<script>
import ProductListVue from '@/views/Unit7/ProductList.vue'
import CartVue from '@/views/Unit7/Cart.vue'
import ProductFormVue from '@/views/Unit7/ProductForm.vue'
import ProductItemVue from '@/views/Unit7/ProductItem.vue'
    export default {
        components: {
            ProductListVue,
            CartVue,
            ProductFormVue,
            ProductItemVue
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
    }

    .container{
        padding: 0 2%;
        margin-top: 5%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
    }
</style>