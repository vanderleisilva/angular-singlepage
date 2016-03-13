 'use strict';

var app = angular.module('app',['ngRoute','LocalStorageModule','ui.mask']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app');
});
