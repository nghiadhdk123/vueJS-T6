<template>
    <div>
        <h1>Đây là Profile View</h1>
        <button @click="GoToPage()">
            Go to About Page
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            GoToPage() {
                this.$router.push({name:'about'});
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>