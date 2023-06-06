import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "companies" */ "../views/HomeView.vue"),
    },
    {
        path: "/companies",
        name: "companies",
        component: () => import(/* webpackChunkName: "companies" */ "../views/CompaniesView.vue"),
    },
    {
        path: "/leades",
        name: "leades",
        component: () => import(/* webpackChunkName: "leades" */ "../views/LeadesView.vue"),
    },
    {
        path: "/products",
        name: "products",
        component: () => import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
    },
    {
        path: "/companydetail/:Id",
        name: "companydetail",
        component: () => import(/* webpackChunkName: "companydetail" */ "../views/CompanyDetailView.vue"),
    },
    {
        path: "/leaddetail/:Id",
        name: "leaddetail",
        component: () => import(/* webpackChunkName: "leaddetail" */ "../views/LeadDetailView.vue"),
    },
    {
        path: "/500",
        name: "ServerError",
        component: () => import(/* webpackChunkName: "companydetail" */ "../views/ErrorViews/ServerErrorView.vue"),
    },
    {
        path: "/forgetpassword",
        name: "ForgetPassword",
        component: () => import(/* webpackChunkName: "forgetpassword" */ "../views/ForgetPasswordView.vue"),
    },
    {
        path: "/accountactivation",
        name: "AccountActivation",
        component: () => import(/* webpackChunkName: "accountactivation" */ "../views/AccountActivationView.vue"),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import(/* webpackChunkName: "pageNotFound" */ "@/views/ErrorViews/NotFoundView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
