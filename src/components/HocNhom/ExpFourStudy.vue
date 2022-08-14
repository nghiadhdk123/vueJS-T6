<template>
    <div>
        <h1>Hello World</h1>
    </div>
</template>

<script>
import _ from 'lodash'
    export default {
        mounted () {
            this.join();
            // this.chunk();
            // this.last();
            // this.fill();
            // this.sortBy();
            // this.has();
            // this.drop();
            // this.pick()
        },
        methods: {
            join() {
                let array = ['a','b','c','d','e','g','h','j'];

                let result = _.join(array,'*');
                console.log(result);
            },

            chunk() {
                // Tạo 1 mảng mới có số độ dài phần tử mà ta chuyền vào
                let array = ['a','b','c','d','e','g','h','j'];

                let result = _.chunk(array,3);
                console.log(result);
            },

            last() {
                // Hàm lấy phần tử cuối cùng của mảng
                let array = ['a','b','c','d','e','g','h','j'];

                let result = _.last(array);
                console.log(result);
            },

            fill() {
                // Hàm ghi đè phần tử mảng --> Ghi đè phẩn tử số 3 từ ví trị số 2 đến vị trí 5 --> từ start -> end-1
                let array = ['a','b','c','d','e','g','h','j'];

                let result = _.fill(array,3,2,6);
                console.log(result);
            },

            sortBy() {
                // Hàm sắp xếp phẩn tử mảng theo thứ tự
                let users = [
                    {name:'A',age:15},
                    {name:'B',age:25},
                    {name:'C',age:5},
                    {name:'D',age:75},
                ];

                let result = _.sortBy(users,'age');
                console.log(result);
            },

            has() {
                //Hàm kiểm tra sự tồn tại đối tượng --> trả true - false 
                let user = {
                    name:"Nghĩa",
                    age:21,
                    address:{
                        thi_xa:"Từ Sơn",
                        tinh:"Bắc Ninh"
                    },
                };

                let result = _.has(user,'address.thi_xa');
                console.log(result);
            },

            drop() {
                //Hàm cắt số phẩn tử mảng từ vị trí ban đầu 
                let array = ['a','b','c','d','e','g','h','j'];

                let result = _.drop(array,3);
                console.log(result);
            },

            pick() {
                // Hàm chọn ra các phần tử và giá trị mà ta muốn lấy
                let user = {
                    name:"Nghĩa",
                    age:21,
                    address:{
                        thi_xa:"Từ Sơn",
                        tinh:"Bắc Ninh"
                    },
                };

                let result = _.pick(user,['name','address']);
                console.log(result);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>