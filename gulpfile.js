var elixir = require('laravel-elixir');

/*
|--------------------------------------------------------------------------
| Elixir Asset Management
|--------------------------------------------------------------------------
|
| Elixir provides a clean, fluent API for defining some basic Gulp tasks
| for your Laravel application. By default, we are compiling the Sass
| file for our application, as well as publishing vendor resources.
|
*/

elixir.config.assetsPath = 'resources/';
elixir.config.sourcemaps = false;

elixir(function(mix) {

    mix.less('app.less');

    mix.copy('resources/vendor/font-awesome/fonts', 'public/fonts');
    mix.copy('resources/vendor/bootstrap/dist/fonts', 'public/fonts');

    mix.scripts([
        '../vendor/jquery/dist/jquery.min.js',
        '../vendor/datatables/media/js/jquery.dataTables.min.js',
        '../vendor/angular/angular.min.js',
        '../vendor/angular-resource/angular-resource.min.js',
        '../vendor/angular-route/angular-route.min.js',
        '../vendor/angular-local-storage/dist/angular-local-storage.min.js',
        '../vendor/angular-ui-mask/dist/mask.min.js',
        '../vendor/datatables/media/js/dataTables.bootstrap.min.js',
        '../vendor/angular-datatables/dist/angular-datatables.min.js',
        'main.js',
        'routes.js',
        'components/home',
        'components/customer',
        'components/statistic',
        'components/about'
    ], 'public/js/main.js');
});
