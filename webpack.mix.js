const mix = require('laravel-mix');
const path = require('path')

mix.webpackConfig({
    resolve: {
        alias: {
            'src': path.resolve(__dirname, "resources/js"),
            '@': path.resolve(__dirname, "resources/js")
        }
    }
});

mix.babelConfig({
    plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
    ],
})

mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 8080
    }
})

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
