<template>
    <div class="container">
        <ProductFormVue @EventAddProduct="EventAddProduct" 
                        @EventUpdateDataProduct="EventUpdateDataProduct"
                        @EventChangeActive="EventChangeActive"
                        :active="active" 
                        :itemUpdate="{id:itemUpdate.id,name:itemUpdate.name,price:itemUpdate.price,quantity:itemUpdate.quantity}"></ProductFormVue>
        <ProductListVue :items="items" 
                        @EventUpdateProduct="EventUpdateProduct"
                        @EventDeleteProduct="EventDeleteProduct"></ProductListVue>
    </div>
</template>

<script>
    import ProductFormVue from './ProductForm.vue'
    import ProductListVue from './ProductList.vue'

    export default {
        components: {
            ProductFormVue,
            ProductListVue
        },

        data() {
            return {
                items: [],
                
                itemUpdate: {
                    id: '',
                    name:' ',
                    price: '',
                    quantity: '',
                },
                active:false,
            }
        },

        methods: {
            EventAddProduct(data) {
                // console.log(data);
                this.items.unshift({
                    id:data.id,
                    name:data.name,
                    price:data.price,
                    quantity:data.quantity
                });

                this.itemUpdate.id = ''
                this.itemUpdate.name = ''
                this.itemUpdate.price = ''
                this.itemUpdate.quantity = ''
            },

            EventUpdateProduct(data)
            {
                // console.log(data);
                    var number;
                    this.items.map((el,index) => {
                    if(el.id == data.id)
                    {
                        number = index;
                    }
                });

                // console.log(this.items[number]);
                this.itemUpdate.id = this.items[number].id;
                this.itemUpdate.name = this.items[number].name;
                this.itemUpdate.price = this.items[number].price;
                this.itemUpdate.quantity = this.items[number].quantity;

                this.active = data.active;
            },

            EventDeleteProduct(data)
            {
                var key;
                this.items.map((el,index) => {
                    if(el.id == data.id)
                    {
                        key = index;
                    }
                });
                this.items.splice(key,1);
            },

            EventUpdateDataProduct(data)
            {
                var key;
                this.items.map((el,index) => {
                    if(el.id == data.id)
                    {
                        key = index;
                    }
                });

                this.items[key].name = data.name;
                this.items[key].price = data.price;
                this.items[key].quantity = data.quantity;

                this.active = false;

                this.itemUpdate.id = ''
                this.itemUpdate.name = ''
                this.itemUpdate.price = ''
                this.itemUpdate.quantity = ''
            },

            EventChangeActive(data)
            {
                this.active = data.active;

                this.itemUpdate.id = ''
                this.itemUpdate.name = ''
                this.itemUpdate.price = ''
                this.itemUpdate.quantity = ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 5%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        // align-items: center;
    }
</style>