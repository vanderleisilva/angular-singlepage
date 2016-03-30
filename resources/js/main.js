 'use strict';

var app = angular.module('app',['ngRoute','LocalStorageModule','ui.mask','datatables', 'ngResource']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app');
});
