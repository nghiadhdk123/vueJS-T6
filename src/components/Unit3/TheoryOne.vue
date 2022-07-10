<template>
    <div>
        <h1>Unit 3</h1>
        <div class="container">
            <LoginFormVue @EventChangeData="EventChangeData"></LoginFormVue>
            <LoginMessageVue :email="email" :password="password"></LoginMessageVue>
        </div>
    </div>
</template>

<script>
    import LoginFormVue from './LoginForm.vue'
    import LoginMessageVue from './LoginMessage.vue'

    export default {
        components: {
            LoginFormVue,
            LoginMessageVue
        },    

        data() {
            return {
                email: '',
                password: '',
            }
        },

        methods: {
            EventChangeData(data) {
                this.email = data.email;
                this.password = data.password
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
</style>