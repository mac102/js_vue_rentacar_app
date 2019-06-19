import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/vehicles/:slug',
            name: 'vehicleDetail',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/VehicleDetails.vue')
        },
        {
            path: '/reservation',
            name: 'reservation',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Reservation.vue')
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Confirmation.vue')
        }
    ]
})