import "./bootstrap";
import "../css/app.css";
import "../sass/app.scss";

import { createApp } from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from "vue-router";
// import router from "./routes";

const app = createApp({
    components: {},
});

app.mount("#app");
// app.use(router);
