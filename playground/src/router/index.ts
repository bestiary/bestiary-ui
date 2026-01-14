import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: () => import('../views/ButtonView.vue')
        },
        {
            path: '/cards',
            name: 'cards',
            component: () => import('../views/CardView.vue')
        },
        {
            path: '/icons',
            name: 'icons',
            component: () => import('../views/IconView.vue')
        }
    ]
})

export default router
