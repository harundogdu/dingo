const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.copy(
    "resources/assets/admin/vendor/fontawesome-free/webfonts",
    "public/admins/webfonts"
);
mix.copy("resources/assets/admin/img", "public/admins/img");
mix.copy("resources/assets/admin/img", "public/img");
mix.copy(
    "resources/assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js.map",
    "public/admins/js"
);
mix.copy("resources/assets/admin/vendor/chartjs", "public/admins/js/chartjs");
mix.copy("resources/assets/admin/js/demo", "public/admins/js/demo");
mix.copy(
    "resources/assets/admin/vendor/datatables",
    "public/admins/js/datatables"
);

/* core dosyaları 'combine()' ile bağlıyoruz */
mix.js("resources/js/app.js", "public/js")
    .combine(
        [
            "resources/assets/admin/vendor/jquery/jquery.min.js",
            "resources/assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js",
            "resources/assets/admin/vendor/jquery-easing/jquery.easing.min.js",
            "resources/assets/admin/js/sb-admin-2.min.js"
        ],
        "public/admins/js/sb-admin.js"
    )
    .styles(
        [
            "resources/assets/admin/vendor/fontawesome-free/css/all.min.css",
            "resources/assets/admin/css/sb-admin-2.min.css"
        ],
        "public/admins/css/sb-admin.css"
    )
    .sourceMaps();
mix.version().browserSync("dingo.test");

/*   mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css'); */
