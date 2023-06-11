import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "companies" */ "../views/HomeView.vue"),
        meta: {
            title: "Export Raijoffle - Home Page",
            description: "Export Raijoffle Home Page",
            canonical: `https://export.raijoffle.com/`,
            keywords: "export, export portal, export to the world",
            url: "https://export.raijoffle.com",
            identifierURL: "https://export.raijoffle.com",
        },
    },
    {
        path: "/companies",
        name: "companies",
        component: () => import(/* webpackChunkName: "companies" */ "../views/CompaniesView.vue"),
        meta: {
            title: "Export Raijoffle - Companies Page",
            description: "Export Raijoffle Companies Page",
            canonical: `https://export.raijoffle.com/companies`,
            keywords: "company, companies, export company",
            url: "https://export.raijoffle.com/companies",
            identifierURL: "https://export.raijoffle.com/companies",
        },
    },
    {
        path: "/leades",
        name: "leades",
        component: () => import(/* webpackChunkName: "leades" */ "../views/LeadesView.vue"),
        meta: {
            title: "Export Raijoffle - Leades Page",
            description: "Export Raijoffle Leades Page",
            canonical: `https://export.raijoffle.com/leades`,
            keywords: "export lead, export leades, leades",
            url: "https://export.raijoffle.com/leades",
            identifierURL: "https://export.raijoffle.com/leades",
        },
    },
    {
        path: "/products",
        name: "products",
        component: () => import(/* webpackChunkName: "products" */ "../views/ProductsView.vue"),
        meta: {
            title: "Export Raijoffle - Products Page",
            description: "Export Raijoffle Products Page",
            canonical: `https://export.raijoffle.com/products`,
            keywords: "products, export products, company products",
            url: "https://export.raijoffle.com/products",
            identifierURL: "https://export.raijoffle.com/products",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
        meta: {
            title: "Export Raijoffle - Login Page",
            description: "Export Raijoffle Login Page",
            canonical: `https://export.raijoffle.com/login`,
            keywords: "login, export portal login, export portal signin",
            url: "https://export.raijoffle.com/login",
            identifierURL: "https://export.raijoffle.com/login",
        },
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import(/* webpackChunkName: "signup" */ "../views/SignupView.vue"),
        meta: {
            title: "Export Raijoffle - Signup Page",
            description: "Export Raijoffle Signup Page",
            canonical: `https://export.raijoffle.com/signup`,
            keywords: "signup, export portal signup, export portal register",
            url: "https://export.raijoffle.com/signup",
            identifierURL: "https://export.raijoffle.com/signup",
        },
    },
    {
        path: "/companydetail/:id",
        name: "companydetail",
        component: () => import(/* webpackChunkName: "companydetail" */ "../views/CompanyDetailView.vue"),
        meta: {
            title: "Export Raijoffle - Company Detail Page",
            description: "Export Raijoffle Company Detail",
            canonical: `https://export.raijoffle.com/componydetail/:id`,
            keywords: "company detail, detail company, companies detail",
            url: "https://export.raijoffle.com/componydetail/:id",
            identifierURL: "https://export.raijoffle.com/componydetail/:id",
        },
    },
    {
        path: "/leaddetail/:Id",
        name: "leaddetail",
        component: () => import(/* webpackChunkName: "leaddetail" */ "../views/LeadDetailView.vue"),
        meta: {
            title: "Export Raijoffle - Lead Detail Page",
            description: "Export Raijoffle Lead Detail Page",
            canonical: `https://export.raijoffle.com/leaddetail/:id`,
            keywords: "lead, leades, lead detail",
            url: "https://export.raijoffle.com/leaddetail/:id",
            identifierURL: "https://export.raijoffle.com/leaddetail/:id",
        },
    },
    {
        path: "/servererror",
        name: "ServerError",
        component: () => import(/* webpackChunkName: "companydetail" */ "../views/ErrorViews/ServerErrorView.vue"),
        meta: {
            title: "Export Raijoffle - Server Error Page",
            description: "Export Raijoffle Server Error Page",
            canonical: `https://export.raijoffle.com/servererror`,
            keywords: "Server Error",
            url: "https://export.raijoffle.com/servererror",
            identifierURL: "https://export.raijoffle.com/servererror",
        },
    },
    {
        path: "/forgetpassword",
        name: "ForgetPassword",
        component: () => import(/* webpackChunkName: "forgetpassword" */ "../views/ForgetPasswordView.vue"),
        meta: {
            title: "Export Raijoffle - Forget Password Page",
            description: "Export Raijoffle Forget Password Page",
            canonical: `https://export.raijoffle.com/forgetpassword`,
            keywords: "forget Password, get password again",
            url: "https://export.raijoffle.com/forgetpassword",
            identifierURL: "https://export.raijoffle.com/forgetpassword",
        },
    },
    {
        path: "/accountactivation",
        name: "AccountActivation",
        component: () => import(/* webpackChunkName: "accountactivation" */ "../views/AccountActivationView.vue"),
        meta: {
            title: "Export Raijoffle - Account Activation Page",
            description: "Export Raijoffle Account Activation Page",
            canonical: `https://export.raijoffle.com/accountactivation`,
            keywords: "account activation, activation, account",
            url: "https://export.raijoffle.com/accountactivation",
            identifierURL: "https://export.raijoffle.com/accountactivation",
        },
    },

    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "NotFound",
    //     component: () => import(/* webpackChunkName: "pageNotFound" */ "@/views/ErrorViews/NotFoundView.vue"),
    //     meta: {
    //         title: "Export Raijoffle - Page Not Found",
    //         description: "Export Raijoffle Page Not Found",
    //         canonical: `https://export.raijoffle.com/pagenotfound`,
    //         keywords: "Page Not Found",
    //         url: "https://export.raijoffle.com/:pathMatch(.*)*",
    //         identifierURL: "https://export.raijoffle.com/:pathMatch(.*)*",
    //     },
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    const url = document.querySelector('meta[name="url"]');
    const identifierURL = document.querySelector('meta[name="identifier-URL"]');
    description.setAttribute("content", to.meta.description);
    canonical.setAttribute("href", to.meta.canonical);
    keywords.setAttribute("content", to.meta.keywords);
    url.setAttribute("content", to.meta.url);
    identifierURL.setAttribute("content", to.meta.identifierURL);

    if (to.matched.length === 0) {
        // Eşleşen bir route yoksa, yani 404 durumu
        const error = new Error("Not Found");
        error.status = 404;
        next(error);
        console.log(error);
    } else {
        // Geçerli route varsa devam et
        next();
    }
});
export default router;
