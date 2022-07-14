<template>
    <div class="container">
        <div class="tag-menu">
            <button class="menu" @click="active = true" :class="{active:active}">Trang chủ</button>
            <button class="menu" @click="active = false" :class="{active:!active}">Trang chủ 2</button>
        </div>
        <el-row v-if="active" >
            <ExpThreeStudy3 v-for="banh in contents" :key="banh">
                <template v-slot:banh>{{ banh }}</template>
            </ExpThreeStudy3>
        </el-row>

        <ExpThreeTable v-else :data="data"></ExpThreeTable>
    </div>
</template>

<script>
import ExpThreeStudy3 from './ExpThreeStudy3.vue'
import ExpThreeTable from './ExpThreeTable.vue'
export default {
    components: {
        ExpThreeStudy3,
        ExpThreeTable
    },

    data() {
        return {
            active: false,
            contents: [
                'Bánh 1',
                'Bánh 2',
                'Bánh 3',
                'Bánh 4',
                'Bánh 5',
                'Bánh 6',
                'Bánh 7',
                'Bánh 8',
            ],

            data: [
                {
                    date: '2016-05-03',
                    name: 'Nghĩa',
                    address: 'Việt Nam'
                }, {
                    date: '2016-05-02',
                    name: 'Xếp',
                    address: 'Sao hỏa'
                }, {
                    date: '2016-05-04',
                    name: 'Thầy Thắng',
                    address: 'Vnua'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'cartoon network'
                },
                {
                    date: '2016-05-01',
                    name: 'Jerry',
                    address: 'cartoon network'
                },
                {
                    date: '2016-05-01',
                    name: 'Tommast',
                    address: 'No. 189, Grove St, Los Angeles'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 60px;
    text-align: center;

    .tag-menu {
        height: 60px;
        background: #80808052;
        line-height: 60px;

        button {
            width: 100px;
            height: 40px;
            border: none;
            cursor: pointer;
            margin-right: 2%;
        }

        .active{
            background-color: green;
        }
    }
}
</style>