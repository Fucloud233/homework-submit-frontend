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
                component: () =>
                    import("../views/sub/personnel/student/Add.vue"),
            },
            {
                path: "/student",
                name: "student",
                component: () =>
                    import("../views/sub/personnel/student/Query.vue"),
            },
            {
                path: "/student/add",
                name: "studentAdd",
                component: () =>
                    import("../views/sub/personnel/student/Add.vue"),
            },
            {
                path: "/student/add/batch",
                name: "studentAddInBatch",
                component: () =>
                    import("@/views/sub/personnel/student/AddInBatch.vue"),
            },
            {
                path: "/teacher",
                name: "teacher",
                component: () =>
                    import("../views/sub/personnel/student/Add.vue"),
            },
            {
                path: "/admin",
                name: "admin",
                component: () =>
                    import("../views/sub/personnel/student/Add.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
