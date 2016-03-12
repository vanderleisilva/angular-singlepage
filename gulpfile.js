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
      '../vendor/angular-resource/angular-resource.min.js',
      '../vendor/jquery/dist/jquery.min.js',
      '../vendor/bootstrap/dist/js/bootstrap.min.js',
      'main.js',
      'routes.js'
    ], 'public/js/main.js');
});
