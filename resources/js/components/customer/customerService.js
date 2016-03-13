app.service('customerService', function($http) {

    var server = "data/customers.json";

    this.get = function (callback, customer) {
        $http.get(server).then(function (response) {
            if (!customer) {
                callback(response.data);
                return;
            }

            var selectedCustomer = response.data.filter(function(item){
                return item.id == customer.id;
            })

            callback(selectedCustomer ? selectedCustomer[0] : false);
        });
    }

    this.new = function (customer) {

    }

    this.remove = function (customer) {

    }

});
