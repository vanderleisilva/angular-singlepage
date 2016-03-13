app.controller('homeController', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});
