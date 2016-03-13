app.controller('aboutController', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});
