let register = require("./components/auth/register.vue").default;
let login = require("./components/auth/login").default;
let forget = require("./components/auth/forget.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
];
