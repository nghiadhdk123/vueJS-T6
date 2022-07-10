<template>
    <div class="list-data-product">
       <table border="1">
            <thead>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
            </thead>
            <tbody>
                <tr v-if="items == ''">
                    <td colspan="6">Không có dữ liệu ......</td>
                </tr>
                <tr v-else v-for="(item) in getProduct()" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ FormatMoney(item.price) }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>
                        <span v-if="item.quantity > 0" style="color:green">Còn hàng</span>
                        <span v-else style="color:red">Hết hàng</span>
                    </td>
                    <td>
                        <button @click="updateProduct(item.id)">Sửa</button>
                        <button @click="deleteProduct(item.id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
       </table>
       <div class="paginate">
            <p class="number-page">Hiện thị {{indexStart+1}}-{{toPage()}} trên tổng {{total}} sản phẩm ({{currentPage}} trang)</p>
            <div class="arrow">
                <button @click="currentPage--" :disabled="currentPage == 1"> > </button>
                <button @click="currentPage++" :disabled="currentPage == Math.ceil(total/pageSize)"> > </button>
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageSize: 5,
                currentPage: 1,
                total: this.items.length,
            }
        },
        props: {
            items: {
                type: Array,
                default() {
                    return [];
                }
            },
        },

        mounted () {
            // console.log('Mounted');
            this.getProduct();
        },

        updated () {
            // console.log('Updated');
            this.getProduct();
            this.total = this.items.length;
        },

        computed: {
            indexStart() {
                return (this.currentPage-1)*this.pageSize; 
            },

            indexEnd() {
                return this.indexStart + this.pageSize;
            }
        },

        methods: {
            FormatMoney(data) {
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(data)
            },

            getProduct()
            {
                let result = this.items.slice(this.indexStart,this.indexEnd);
                return result
            },

            updateProduct(key)
            {
                var data = {
                    id:key,
                    active:true,
                };
                this.$emit('EventUpdateProduct',data);
            },

            deleteProduct(key) {
                var data = {
                    id:key,
                }
                this.$emit('EventDeleteProduct',data);
            },

             toPage() {
                let toPage = this.currentPage * this.pageSize
                return toPage < this.items.length ? toPage : this.items.length
            }
        },
    }
</script>

<style lang="scss" scoped>
    .list-data-product{
        width: 60%;
        box-sizing: border-box;

        table{
            width: 100%;
            height: 400px;
            border-collapse: collapse;
            border-color: #80808059;

            thead{
                
                th{
                    padding: 2%;
                    background-color: #f2f6fe;
                }
            }

            tbody{
                
                td{
                    padding: 1%;
                }
            }
        }  //End table

        .paginate{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .arrow{
                display: flex;
                justify-content: space-between;

                button{
                    width: 25px;
                    height: 25px;
                    outline: none;
                    font-weight: bold;
                }

                button:nth-child(1)
                {
                    margin-right: 5%;
                    transform: rotate(180deg);
                }
            } // End arrow
        }  //End paginate
    } // End list-data-product
</style>