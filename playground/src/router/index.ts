import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/buttons",
            name: "buttons",
            component: () => import("../views/ButtonView.vue")
        },
        {
            path: "/cards",
            name: "cards",
            component: () => import("../views/CardView.vue")
        },
        {
            path: "/badges",
            name: "badges",
            component: () => import("../views/BadgeView.vue")
        },
        {
            path: "/icons",
            name: "icons",
            component: () => import("../views/IconView.vue")
        },
        {
            path: "/divider",
            name: "divider",
            component: () => import("../views/DividerView.vue")
        },
        {
            path: "/splitter",
            name: "splitter",
            component: () => import("../views/SplitterView.vue")
        },
        {
            path: "/input",
            name: "input",
            component: () => import("../views/InputView.vue")
        },
        {
            path: "/textarea",
            name: "textarea",
            component: () => import("../views/TextareaView.vue")
        },
        {
            path: "/message",
            name: "message",
            component: () => import("../views/MessageView.vue")
        },
        {
            path: "/tokens",
            name: "tokens",
            component: () => import("../views/DesignTokensView.vue")
        },
        {
            path: "/overview",
            name: "overview",
            component: () => import("../views/OverviewView.vue")
        }
    ]
});

export default router;
