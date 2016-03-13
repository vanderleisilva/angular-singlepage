app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl : 'views/home/homeView.html',
        controller : 'homeController'
    });

    $routeProvider.when('/customer', {
        templateUrl : 'views/customer/listView.html',
        controller : 'customer/listController'
    });

    $routeProvider.when('/customer/new', {
        templateUrl : 'views/customer/editView.html',
        controller : 'customer/editController'
    });

    $routeProvider.when('/customer/edit/:id', {
        templateUrl : 'views/customer/editView.html',
        controller : 'customer/editController'
    });

    $routeProvider.when('/statistics', {
        templateUrl : 'views/statistic/statisticView.html',
        controller : 'statisticController'
    });

    $routeProvider.when('/about', {
        templateUrl : 'views/about/aboutView.html',
        controller : 'aboutController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
}]);
