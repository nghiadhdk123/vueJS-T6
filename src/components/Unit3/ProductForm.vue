<template>
    <div class="form-input-data">
        <h2>Sản phẩm</h2>
        <form action="" autocomplete="off">
            <label for="">Tên sản phẩm <span class="request-data">(*)</span></label>
            <input type="text" name="name" v-model="items.name">
            <span class="error" v-if="errors[0].active">{{errors[0].name}}</span>
            <label for="">Giá sản phẩm <span class="request-data">(*)</span></label>
            <input type="text" name="price" v-model="items.price">
            <span class="error" v-if="errors[1].active">{{errors[1].price}}</span>
            <label for="">Số lượng <span class="request-data">(*)</span></label>
            <input type="text" name="quantity" v-model="items.quantity">
            <span class="error" v-if="errors[2].active">{{errors[2].quantity}}</span>
            <div class="button-data">
                <button @click.prevent="createProduct()" v-if="!active">Tạo mới</button>
                <button v-else @click.prevent="updateProduct()">Cập nhập</button>
                <button type="reset" @click.prevent="resetForm()">Hủy</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: {
                    id:'',
                    name:'',
                    price:'',
                    quantity:'',
                },

                errors: [
                    {
                        name:'',
                        active:false,
                    },
                    {
                        price:'',
                        active:false,
                    },
                    {
                        quantity: '',
                        active:false
                    }
                ]
            }
        },

        props: {
            itemUpdate: {
                type:Object,
                default() {
                    return {};
                }
            },

            active: {
                type:Boolean,
            }
        },

        // mounted () {
        //     this.Time();
        //     // this.updateData();
        // },

        // created () {
        //     // this.updateData();
        // },

        // updated () {
        //     console.log('Updated');
        //     // this.updateData();
        // },

        methods: {
            createProduct() {
                if(this.items.name == ''){
                    this.errors[0].name = 'Sản phẩm không được phép bỏ trống.';
                    this.errors[0].active = true;
                }

                if(this.items.price == ''){
                    this.errors[1].price = 'Giá sản phẩm không được phép bỏ trống.';
                    this.errors[1].active = true;
                }else if(isNaN(this.items.price))
                {
                    this.errors[1].price = 'Giá sản phẩm phải là số.';
                    this.errors[1].active = true;
                }

                if(this.items.quantity == ''){
                    this.errors[2].quantity = 'Số lượng sản phẩm không được phép bỏ trống.';
                    this.errors[2].active = true;
                }else if(isNaN(this.items.quantity))
                {
                    this.errors[2].quantity = 'Số lượng sản phẩm phải là số.';
                    this.errors[2].active = true;
                }

                if(this.errors[0].active == false && this.errors[1].active == false && this.errors[2].active == false)
                {
                    var time = Date.now();
                    let data = {
                        id:time,
                        name:this.items.name,
                        price:this.items.price,
                        quantity:this.items.quantity,
                    };
                    this.$emit('EventAddProduct',data);

                    this.items.id = '';
                    this.items.name = '';
                    this.items.price = '';
                    this.items.quantity = '';
                }
            },

            Time() {
                var current = Date.now();
                console.log(current)
            },

            updateData()
            {
                if(this.itemUpdate.id != '' && this.itemUpdate.name != '' && this.itemUpdate.price != '' && this.itemUpdate.quantity != '')
                {
                    this.items.id = this.itemUpdate.id;
                    this.items.name = this.itemUpdate.name;
                    this.items.price = this.itemUpdate.price;
                    this.items.quantity = this.itemUpdate.quantity;
                }
            },

            updateProduct()
            {
                // console.log(this.itemUpdate);
                var data = {
                    id:this.items.id,
                    name:this.items.name,
                    price:this.items.price,
                    quantity:this.items.quantity,
                };

                this.$emit('EventUpdateDataProduct',data);

                this.items.id = '';
                this.items.name = '';
                this.items.price = '';
                this.items.quantity = '';
            },

            resetForm() {
                var data = {
                    active:false,
                };
                this.$emit('EventChangeActive',data);

                this.items.id = '';
                this.items.name = '';
                this.items.price = '';
                this.items.quantity = '';
            },
        },

        watch: {
            'items.name'(value) {
                if(value.length > 0)
                {
                    this.errors[0].name = '';
                    this.errors[0].active = false;
                }
            },

            'items.price'(value) {
                if(value.length > 0)
                {
                    this.errors[1].price = '';
                    this.errors[1].active = false;
                }
            },

            'items.quantity'(value) {
                if(value.length > 0)
                {
                    this.errors[2].quantity = '';
                    this.errors[2].active = false;
                }
            },

            itemUpdate()
            {
                // console.log(value);
                this.updateData();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .form-input-data{
        width: 39%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border: 1px solid #80808063;
        padding: 3%;
        box-sizing: border-box;

        form{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;

            input{
                width: 100%;
                padding: 1%;
            }

            label{
                font-weight: bold;
                margin: 2% 0;

                .request-data{
                    color:red;
                }
            }

            .error{
                color: red;
                font-size: 14px;
                margin: 1% 0;
            }

            .button-data{
                margin-top: 3%;
                width: 100%;
                text-align: right;

                button{
                    width: 80px;
                    height: 35px;
                    font-weight: bold;
                    cursor: pointer;
                    border-radius: 3px;
                    border:none
                }

                button:nth-child(1){
                    background-color: #0080dd;
                    color:white;
                    margin-right: 1%;
                }
            }
        } //End form
    }  // End form-input-data
</style>