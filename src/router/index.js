import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: ProductView
    },
    {
        path: '/',
        name: 'product',
        component: () =>
            import ('../components/Unit7/BaseLayout.vue'),
    },
    {
        path: '/input',
        name: 'input',
        component: () =>
            import ('../views/InputView.vue'),
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () =>
            import ('../views/CalendarView.vue'),
    },
    {
        path: '/loading',
        name: 'loading',
        component: () =>
            import ('../views/LoadingView.vue'),
    },

    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../layouts/Login.vue'),
        children: [{
            path: '/',
            name: 'formLogin',
            component: () =>
                import ('../views/LoginForm.vue'),
        }, {
            path: '/forget-password',
            name: 'forgetPassword',
            component: () =>
                import ('../views/ForgetPassword.vue'),
        }]
    },
    {
        path: '/hello',
        name: 'hello',
        component: () =>
            import ('../components/HelloWorld.vue'),
    },
    {
        path: '/hello2',
        name: 'hello2',
        component: () =>
            import ('../components/HelloWorld2.vue'),
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    // },
    // {
    //     path: '/user/:id',
    //     name: 'user',
    //     component: () =>
    //         import ('../views/UserView.vue'),
    //     children: [{
    //             path: 'profile',
    //             name: 'profile',
    //             component: () =>
    //                 import ('../views/ProfileView.vue')
    //         },
    //         {
    //             path: 'post',
    //             name: 'post',
    //             component: () =>
    //                 import ('../views/PostView.vue')
    //         },
    //     ]
    // }
    {
        path: '/products',
        name: 'products',
        component: () =>
            import ('../views/Unit9/ProductView.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router