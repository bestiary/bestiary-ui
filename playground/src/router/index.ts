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

        // General
        {
            path: "/buttons",
            name: "buttons",
            component: () => import("../views/ButtonView.vue"),
            meta: {category: "General", title: "Button"}
        },

        // Layout
        {
            path: "/divider",
            name: "divider",
            component: () => import("../views/DividerView.vue"),
            meta: {category: "Layout", title: "Divider"}
        },
        {
            path: "/splitter",
            name: "splitter",
            component: () => import("../views/SplitterView.vue"),
            meta: {category: "Layout", title: "Splitter"}
        },

        // Navigation
        {
            path: "/paginator",
            name: "paginator",
            component: () => import("../views/PaginatorView.vue"),
            meta: {category: "Navigation", title: "Paginator"}
        },


        // Data Entry
        {
            path: "/input",
            name: "input",
            component: () => import("../views/InputView.vue"),
            meta: {category: "Data Entry", title: "InputText"}
        },
        {
            path: "/password",
            name: "password",
            component: () => import("../views/PasswordView.vue"),
            meta: {category: "Data Entry", title: "Password"}
        },
        {
            path: "/textarea",
            name: "textarea",
            component: () => import("../views/TextareaView.vue"),
            meta: {category: "Data Entry", title: "Textarea"}
        },
        {
            path: "/checkbox",
            name: "checkbox",
            component: () => import("../views/CheckboxView.vue"),
            meta: {category: "Data Entry", title: "Checkbox"}
        },
        {
            path: "/rating",
            name: "rating",
            component: () => import("../views/RatingView.vue"),
            meta: {category: "Data Entry", title: "Rating"}
        },
        {
            path: "/select-button",
            name: "select-button",
            component: () => import("../views/SelectButtonView.vue"),
            meta: {category: "Data Entry", title: "SelectButton"}
        },

        // Data Display
        {
            path: "/accordion",
            name: "accordion",
            component: () => import("../views/AccordionView.vue"),
            meta: {category: "Data Display", title: "Accordion"}
        },
        {
            path: "/avatar",
            name: "avatar",
            component: () => import("../views/AvatarView.vue"),
            meta: {category: "Data Display", title: "Avatar"}
        },
        {
            path: "/badge",
            name: "badge",
            component: () => import("../views/BadgeView.vue"),
            meta: {category: "Data Display", title: "Badge"}
        },
        {
            path: "/card",
            name: "card",
            component: () => import("../views/CardView.vue"),
            meta: {category: "Data Display", title: "Card"}
        },
        {
            path: "/table",
            name: "table",
            component: () => import("../views/TableView.vue"),
            meta: {category: "Data Display", title: "Table"}
        },
        {
            path: "/tag",
            name: "tag",
            component: () => import("../views/TagView.vue"),
            meta: {category: "Data Display", title: "Tag"}
        },

        // Feedback
        {
            path: "/message",
            name: "message",
            component: () => import("../views/MessageView.vue"),
            meta: {category: "Feedback", title: "Message"}
        },
        {
            path: "/skeleton",
            name: "skeleton",
            component: () => import("../views/SkeletonView.vue"),
            meta: {category: "Feedback", title: "Skeleton"}
        },
    ]
});

export default router;
