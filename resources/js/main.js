 'use strict';

var app = angular.module('app',['ngRoute','LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app');
});
