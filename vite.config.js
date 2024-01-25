import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/bootstrap.min.css",
                "resources/css/owl.carousel.min.css",
                "resources/css/tooplate-style.css",
                "resources/css/unicons.css",
                "resources/font/unicons.eot",
                "resources/font/unicons.svg",
                "resources/font/unicons.ttf",
                "resources/font/unicons.woff",
                "resources/font/unicons.woff2",
                "resources/js/app.js",
                "resources/js/bootstrap.js",
                "resources/js/bootstrap.min.js",
                "resources/js/custom.js",
                "resources/js/Headroom.js",
                "resources/js/jquery-3.3.1.min.js",
                "resources/js/jQuery.headroom.js",
                "resources/js/owl.carousel.min.js",
                "resources/js/popper.min.js",
                "resources/js/smoothscroll.js",
                "resources/sass/tooplate-style.scss",
            ],
            refresh: true,
        }),
    ],
});
