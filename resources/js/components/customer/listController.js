app.controller('customer/listController', function($rootScope, $location, customerService)
{
    $rootScope.activetab = $location.path();

    $rootScope.remove = function(customer){
        if(confirm("Are you sure to delete customer number: " + customer.id)){
            customerService.remove(customer);
        }
    }

    customerService.get(function(data){
        $rootScope.customers = data;
    });
});
