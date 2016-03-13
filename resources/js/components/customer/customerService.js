app.service('customerService', function(localStorageService) {

    var storageKey = "customers";

    this.get = function (customer) {
        var customers = localStorageService.get(storageKey);

        if (!customer) {
            return customers;
        }

        var selectedCustomer = customers.filter(function(item){
            return item.id == customer.id;
        });

        return selectedCustomer ? selectedCustomer[0] : false;

    }

    this.insert = function(customer){
        var customers = localStorageService.get(storageKey);

        if (!Array.isArray(customers)) {
            customers = [];
        }

        customers.push(customer);
        localStorageService.set(storageKey,customers);
        return true;
    }

    this.update = function(customer) {
        var customers = localStorageService.get(storageKey);

        if (!Array.isArray(customers)) {
            return false;
        }

        customers.splice(customers.findIndex(function(item){
            return item.id == customer.id;
        }), 1, customer);

        localStorageService.set(storageKey,customers);
        return true;
    }

    this.remove = function (customer) {
        var customers = localStorageService.get(storageKey);

        if (!Array.isArray(customers)) {
            return false;
        }

        customers.splice(customers.findIndex(function(item){
            return item.id == customer.id;
        }), 1);

        localStorageService.set(storageKey,customers);
        return true;
    }

});
