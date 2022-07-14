<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default(){
                return [];
            }
        },
    },
    data() {
        return {
            tableData: this.data
        }
    }
}
</script>

<style lang="scss" scoped>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>