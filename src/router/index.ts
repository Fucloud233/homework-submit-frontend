import _CollapseTransition from "element-plus/es/components/collapse-transition/index.mjs";
import { createRouter, createWebHashHistory } from "vue-router";

var routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/Admin.vue"),
    },
    {
        path: "/",
        name: "main",
        component: () => import("../views/MainPage.vue"),
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                component: () => import("../views/sub/personnel/Student.vue"),
            },
            {
                path: "/student",
                name: "student",
                component: () => import("../views/sub/personnel/Student.vue"),
            },
            {
                path: "/teacher",
                name: "teacher",
                component: () => import("../views/sub/personnel/Student.vue"),
            },
            {
                path: "/admin",
                name: "admin",
                component: () => import("../views/sub/personnel/Student.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
