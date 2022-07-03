<template>
    <div>
        <h1 v-if="2 < 1">Hello World</h1>

        <h1 v-else>Hello World but false</h1>

        <h1 v-show="2 > 1">Hello World v-show</h1>

        <h1 v-if="gender === 'nam'">Giới tính nam</h1>
        <h1 v-else-if="gender === 'nu'">Giới tính nữ</h1>
        <h1 v-else>Giới tính khác</h1>

        <hr>

        <ul v-for="(item,index) in items" :key="index" >
        <div v-if="item.quantity >= 30">
            <li >{{ index }}</li>
            <li >{{ item.id }}</li>
            <li >{{ item.name }}</li>
            <li >{{ item.quantity }}</li>
            <hr>
        </div>
        </ul>

        <hr>

        <!-- <p>A + Number = {{addA()}}</p>
        <p>B + Number = {{addB()}}</p> -->

        <p>A + Number = {{addA}}</p>
        <p>B + Number = {{addB}}</p>

        <button @click="a++">A++</button>
        <button @click="b++">B++</button>

        <hr>

        <div class="changeBG" :style="BGroundColoer">
            <input type="number" v-model="numberData">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                gender: 'nam',
                items: [
                    {
                        id:1,
                        name: "Item A",
                        quantity: 10,
                    },
                    {
                        id:2,
                        name: "Item B",
                        quantity: 5,
                    },
                    {
                        id:3,
                        name: "Item C",
                        quantity: 30,
                    },
                ],
                number:0,
                a:4,
                b:3,
                numberData: 0,
                BGroundColoer: 'background-color:black',
            }
        },

        methods: {
            // addA() {
            //     console.log("Running addA");
            //     return this.a + this.number;
            // },

            //  addB() {
            //     console.log("Running addB");
            //     return this.b + this.number;
            // },
        },

        computed: {
            addA() {
                console.log("Running addA");
                return this.a + this.number;
            },

             addB() {
                console.log("Running addB");
                return this.b + this.number;
            },
        },

        watch: {
            numberData(value) {
                if(1 <= value && value <= 10)
                {
                    console.log('Black');
                    this.BGroundColoer = 'background-color:black';
                }else if (11 <= value && value <= 20) {
                    console.log('Red');
                    this.BGroundColoer = 'background-color:red';
                } else if (21 <= value && value <= 30) {
                    console.log('Blue');
                    this.BGroundColoer = 'background-color:blue';
                }else{
                    this.BGroundColoer = 'background-color:unset';
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .changeBG{
        width: 100px;
        height: 100px;
        background-color: unset;
    }
</style>