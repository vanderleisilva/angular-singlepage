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

    mix.scripts([
      '../vendor/angular/angular.min.js',
      '../vendor/angular-route/angular-route.min.js',
      '../vendor/angular-local-storage/dist/angular-local-storage.min.js',
      '../vendor/angular-ui-mask/dist/mask.min.js',
      'main.js',
      'routes.js',
      'components/home',
      'components/customer',
      'components/statistic',
      'components/about'
    ], 'public/js/main.js');
});
