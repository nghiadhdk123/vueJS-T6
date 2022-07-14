<template>
    <div>
        <h1 id="text">
            <slot :data="{text}"></slot>
        </h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Trần Đình Nghĩa',
                age: 22
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>