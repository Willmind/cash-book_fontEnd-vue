import { createRouter, createWebHashHistory} from "vue-router";
const routes=[
    {
        path: "/",
        name: "Home",
        meta: {
            title: "账单",
            keepAlive: true
        },
        component: () => import("../views/Home/index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "登录",
            keepAlive: true
        },
        component: () => import("../views/Login/index.vue"),
    },
    {
        path: "/user",
        name: "User",
        meta: {
            title: "我的",
            keepAlive: true
        },
        component: () => import("../views/User/index.vue"),
    },
    {
        path: "/data",
        name: "Data",
        meta: {
            title: "统计",
            keepAlive: true
        },
        component: () => import("../views/Data/index.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;