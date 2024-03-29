import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CountryFlag from "vue-country-flag-next";
import "@/assets/css/reset.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(store).use(router).use(CountryFlag).mount("#app");
