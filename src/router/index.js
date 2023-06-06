import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "companies" */ "../views/HomeView.vue"),
        meta: {
            title: "Export Raijoffle - Home Page",
            description: "Export Raijoffle Home Page",
        },
    },
    {
        path: "/companies",
        name: "companies",
        component: () => import(/* webpackChunkName: "companies" */ "../views/CompaniesView.vue"),
        meta: {
            title: "Export Raijoffle - Companies Page",
            description: "Export Raijoffle Companies Page",
        },
    },
    {
        path: "/leades",
        name: "leades",
        component: () => import(/* webpackChunkName: "leades" */ "../views/LeadesView.vue"),
        meta: {
            title: "Export Raijoffle - Leades Page",
            description: "Export Raijoffle Leades Page",
        },
    },
    {
        path: "/products",
        name: "products",
        component: () => import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
        meta: {
            title: "Export Raijoffle - Products Page",
            description: "Export Raijoffle Products Page",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
        meta: {
            title: "Export Raijoffle - Login Page",
            description: "Export Raijoffle Login Page",
        },
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
        meta: {
            title: "Export Raijoffle - Signup Page",
            description: "Export Raijoffle Signup Page",
        },
    },
    {
        path: "/companydetail/:Id",
        name: "companydetail",
        component: () => import(/* webpackChunkName: "companydetail" */ "../views/CompanyDetailView.vue"),
        meta: {
            title: "Export Raijoffle - Company Detail Page",
            description: "Export Raijoffle Company Detail",
        },
    },
    {
        path: "/leaddetail/:Id",
        name: "leaddetail",
        component: () => import(/* webpackChunkName: "leaddetail" */ "../views/LeadDetailView.vue"),
        meta: {
            title: "Export Raijoffle - Lead Detail Page",
            description: "Export Raijoffle Lead Detail Page",
        },
    },
    {
        path: "/servererror",
        name: "ServerError",
        component: () => import(/* webpackChunkName: "companydetail" */ "../views/ErrorViews/ServerErrorView.vue"),
        meta: {
            title: "Export Raijoffle - Server Error Page",
            description: "Export Raijoffle Server Error Page",
        },
    },
    {
        path: "/forgetpassword",
        name: "ForgetPassword",
        component: () => import(/* webpackChunkName: "forgetpassword" */ "../views/ForgetPasswordView.vue"),
        meta: {
            title: "Export Raijoffle - Forget Password Page",
            description: "Export Raijoffle Forget Password Page",
        },
    },
    {
        path: "/accountactivation",
        name: "AccountActivation",
        component: () => import(/* webpackChunkName: "accountactivation" */ "../views/AccountActivationView.vue"),
        meta: {
            title: "Export Raijoffle - Account Activation Page",
            description: "Export Raijoffle Account Activation Page",
        },
    },

    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import(/* webpackChunkName: "pageNotFound" */ "@/views/ErrorViews/NotFoundView.vue"),
        meta: {
            title: "Export Raijoffle - Page Not Found",
            description: "Export Raijoffle Page Not Found",
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to) => {
    document.title = to.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute("content", to.meta.description);
    }
});
export default router;
