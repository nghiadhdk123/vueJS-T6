<template>
    <div>
        <div class="wrapper">
            <table>
                <tr>
                    <td colspan="4">
                       <p>{{ number }}</p>
                       <p>{{ kq }}</p>
                    </td>
                </tr>
                <tr>
                    <td class="dotApplication"><span @click="dataClear()">C</span></td>
                    <td class="dotApplication"><span @click="clearDel()">del</span></td>
                    <td class="dotApplication"><span @click="datePercent()">%</span></td>
                    <td class="dotCalculation"><span @click="dataNumber('/')">/</span></td>
                </tr>
                <tr>
                    <td><span @click="dataNumber(7)">7</span></td>
                    <td><span @click="dataNumber(8)">8</span></td>
                    <td><span @click="dataNumber(9)">9</span></td>
                    <td class="dotCalculation"><span @click="dataNumber('*')">*</span></td>
                </tr>
                <tr>
                    <td><span @click="dataNumber(4)">4</span></td>
                    <td><span @click="dataNumber(5)">5</span></td>
                    <td><span @click="dataNumber(6)">6</span></td>
                    <td class="dotCalculation"><span @click="dataNumber('-')">-</span></td>
                </tr>
                 <tr>
                    <td><span @click="dataNumber(1)">1</span></td>
                    <td><span @click="dataNumber(2)">2</span></td>
                    <td><span @click="dataNumber(3)">3</span></td>
                    <td class="dotCalculation"><span @click="dataNumber('+')">+</span></td>
                </tr>
                <tr>
                    <td colspan="2"><span>0</span></td>
                    <td><span @click="dataNumber('.')">.</span></td>
                    <td class="dotCalculation"><span @click="eqal()">=</span></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                number: '',
                kq: '0',
            }
        },

        methods: {
            dataNumber($number) {
                this.number+=$number
            },

            dataClear() {
                this.number = ''
                this.kq = '0'
            },

            eqal()
            {
                this.kq = eval(this.number)
            },

            clearDel() {
                this.number = this.number.substring(0,this.number.length-1)
                this.kq = '0'
            },

            datePercent() {
                this.kq/=100
            }
        },
    }
</script>

<style lang="scss" scoped>

    $whiteColer: white;
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3%;

        table{
            background: #2f2f31;
            border-radius: 5px;

            tr{

                td:nth-child(1){

                   p{
                    margin: 0;
                    width: 100%;
                    height: 35px;
                    color: $whiteColer;
                    font-weight: bold;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    text-indent: -20px;
                    background: #2f2f31;
                   }

                   p:nth-child(2){
                    border-top: 1px solid $whiteColer;
                   }
                }

                td{
                    cursor: pointer;
                    background-color: #616163;
                    border-radius: 5px;

                    span{
                       
                        width: 40px;
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color:$whiteColer
                    }
                }

                td:hover{
                    background-color: #59c894;
                }

                .dotCalculation{
                    background-color: #f49e3f;
                }

                .dotApplication{
                    background-color: #424345;
                }
            }
        }
    }
</style>