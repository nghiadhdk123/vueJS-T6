<template>
    <div>
        <h1>Các hàm xử lý mảng và chuỗi</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr_1: ['a','b','c','d'],
                arr_2: ['e','f','g','h'],
                arr_3: ['q','w','y','u'],
            }
        },

        methods: {

            // Hàm xử lý nối mảng
            handleConCat() {
                let result = this.arr_1.concat(this.arr_2,this.arr_3);

                console.log(result);
            },

            // Xử lý tìm kiếm phần tử trong mảng
            handleFilter() {
               let result = this.arr_2.filter(words => words == "g");

               let result_1 = this.arr_2.filter(words => words == "x");

               console.log(result);
               console.log(result_1);
            },

            //xem liệu một chuỗi có được tìm thấy trong chuỗi khác hay không.
            handeInclude() {
                let result = this.arr_1.includes("a");

                console.log(result);
            },

            //Hàm xử lý biến mảng thành chuỗi
            handleJoin() {
                let result = this.arr_1.join("");

                let result_1 = this.arr_1.join("-");

                console.log(result);
                console.log(result_1);
            },

            // Xử lý tìm kiếm phần tử trong mảng nhưng sẽ lấy ra phần tử đầu tiên thỏa mãn điều kiện
            handleFind() {
                // let result = this.arr_3.find(el => el.length >= 0);

                let result = this.arr_3.find((el) => {
                    return el == 'q'
                })

                console.log(result);
            },

            //Hàm xử lý xóa phần tử cuối cùng của mảng
            handlePop() {
                this.arr_1.pop()
                console.log(this.arr_1);
            },

            //Hàm xử lý xóa phần tử đầu tiên của mảng
            handleShift() {
                this.arr_2.shift()

                console.log(this.arr_2);
            },

            //Hàm xử lý thêm phần tử vào cuối mảng
            handlePush() {
                this.arr_1.push("x","l","n");

                console.log(this.arr_1);
            },

            //Hàm xử lý thêm phần tử vào đầu tiên mảng
            handleUnshift() {
                this.arr_3.unshift("ô","á","ơ");

                console.log(this.arr_3);
            },

            //Hàm xử lý đảo lộn mảng
            handleReverse() {
                console.log(this.arr_1.reverse());
            },

            // Các hàm xử lí chuỗi

            //Hàm xử lí trả vè phần tử mà ta chuyền vị trí vào
            handleCharAt() {
                let result = 'My name is Vue JS - T6';

                console.log(result.charAt(0));
            },

            //Hàm xử lí sẽ trả về ví trí đầu tiên phần tử mà ta chuyền vào
            handleIndexOf() {
                let result = 'My name is Vue JS - T6';

                console.log(result.indexOf('e'));

                console.log(result.indexOf('e',6)); // Tìm vị trí phần tử 'e' từ vị trị thứ 6
            },

            //Hàm xử lí thay thế phẩn tử nhưng nó sẽ chỉ thay phần tử đầu tiên
            handleReplace() {
                let result = 'My name is Vue JS - T6 - JS - T3';

                console.log(result.replace('JS','javascript'));
            },
            
            //Hàm xử lí thay thế tất cả các phẩn tử mà ta muốn thay
            handleReplaceAll() {
                let result = 'My name is Vue JS - T6 - JS - T3';

                console.log(result.replaceAll('JS','javascript'));
            },

            //Hàm xử lí cắt chuỗi
            handleSlice() {
                let result = 'My name is Vue JS - T6 - JS - T3';

                console.log(result.slice(4));   // Cắt đến vị trí thứ 4
                console.log(result.slice(4,10)+'.....');    // Cắt từ vị trí thứ 4 đến vị trị thứ 10
                console.log(result.slice(-4));  // Cắt ngược lại từ phải qua trái bắt đàu từ -1
                console.log(result.slice(-7,-1));
            },

            //Hàm xử lí cắt chuỗi thành mảng
            handleSplit() {
                let result = 'My name is Vue JS - T6 - JS - T3';

                console.log(result.split()); //Nếu không chuyền gì vào thì sẽ cát cả chuỗi thành mảng
                console.log(result.split(""));// Cát từng chữ trong chuỗi thành mảng
                console.log(result.split(" "));// Cát từng từ trong chuỗi thành mảng
                console.log(result.split(" ",5));// Cát từng chữ trong chuỗi thành mảng với giới hạn bao nhiêu
            },

            //Hàm xử lí biến tất cả chữ nào viết hoa thành chữ thường
            handleToLowerCase() {
                let result = 'My name is Vue JS - T6 - JS - T3';

                console.log(result.toLocaleLowerCase());

                console.log(result.charAt(0).toLocaleLowerCase() + result.slice(1));
            }, 

            //Hàm xử lí biến tất cả chữ thường hoa thành chữ hoa
            handleToUpperCase() {
                let result = 'My name is Vue JS - T6 - JS - T3';

                console.log(result.toUpperCase());
            },

            //Hàm xử lí cắt khoảng trắng ở đầu chuỗi
            handleTrim(){
                 let result = '     My name is Vue JS - T6 - JS - T3      ABCEEE       ';

                 console.log(result.trim());
                 console.log(result.trimEnd());  //Hàm xử lí cắt khoảng trắng ở cuối chuỗi
            }


        },

        mounted () {
            //Các hàm xử lí mảng
            
            // this.handleConCat();
            // this.handleFilter();
            // this.handeInclude();
            // this.handleJoin();
            // this.handleFind();
            // this.handlePop();
            // this.handleShift();
            // this.handlePush();
            // this.handleUnshift();
            // this.handleReverse();

            // Các hàm xử lí chuỗi
            // this.handleCharAt();
            // this.handleIndexOf();
            // this.handleReplace();
            // this.handleReplaceAll();
            // this.handleSlice();
            // this.handleSplit();
            this.handleToLowerCase();
            // this.handleToUpperCase();
            // this.handleTrim();
        },
    }
</script>

<style lang="scss" scoped>

</style>