app.controller('customer/editController', function($rootScope, $location, customerService, $routeParams)
{
    $rootScope.activetab = $location.path();
    $rootScope.title = $routeParams.id ? 'Edit customer' : 'New customer';

    if (!$routeParams.id) {
        return;
    }

    customerService.get(function(data){
        if (!data) {
            $location.path("/customer");
        }
        $rootScope.customer = data;
    }, $routeParams);
});
