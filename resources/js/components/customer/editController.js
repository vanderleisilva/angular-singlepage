app.controller('customer/editController', function($rootScope, $location, customerService, $routeParams)
{

    $rootScope.isUpdate = !!$routeParams.id;
    $rootScope.activetab = $location.path();
    $rootScope.title = $rootScope.isUpdate ? 'Edit customer' : 'New customer';
    $rootScope.status = 2;

    $rootScope.save = function(){
        if (!$rootScope.validate()) {
            return;
        }

        if ($rootScope.isUpdate) {
            $rootScope.status = customerService.update($rootScope.customer) ? 1 : 0;
            $location.path("/customer");
            return;
        }

        $rootScope.status = customerService.insert($rootScope.customer) ? 1 : 0;
        $location.path("/customer");
    }

    $rootScope.validate = function(){
        var customer = $rootScope.customer;
        return (customer.id && customer.name && customer.category);
    }

    if (!$routeParams.id) {
        $rootScope.customer = {};
        return;
    }

    $rootScope.customer = customerService.get($routeParams);
});
