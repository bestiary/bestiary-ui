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
          path: "/badges",
          name: "badges",
          component: () => import('../views/BadgeView.vue')
        },
        {
            path: '/icons',
            name: 'icons',
            component: () => import('../views/IconView.vue')
        },
        {
            path: "/divider",
            name: "divider",
            component: () => import('../views/DividerView.vue')
        },
        {
            path: "/splitter",
            name: "splitter",
            "component": () => import('../views/SplitterView.vue')
        }
    ]
})

export default router
