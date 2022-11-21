import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/backend/vendor/jquery/jquery.min.js",
                "resources/backend/vendor/bootstrap/js/bootstrap.bundle.min.js",
                "resources/backend/vendor/jquery-easing/jquery.easing.min.js",
                "resources/backend/js/ruang-admin.min.js",
                "resources/backend/vendor/chart.js/Chart.min.js",
                "resources/backend/js/demo/chart-area-demo.js",
                "resources/backend/vendor/fontawesome-free/css/all.min.css",
                "resources/backend/vendor/bootstrap/css/bootstrap.min.css",
                "resources/backend/css/ruang-admin.min.css",
                "resources/css/app.css",
            ],
            refresh: true,
        }),
    ],
});
