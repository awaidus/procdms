"use strict";
angular.module("app")
    .factory("OrderService", 
        ["$http", function($http){

        var service = {};
        var apiURL = '/api/orders/';

        service.getAll = function () {
            return $http.get(apiURL);
        };

        service.get = function ($id) {            
            return  $http.get(apiURL + 'get/' + $id);            
        };

        service.save = function (record) {           
            return $http.post(apiURL + 'save', record);
        };

        return service;

    }]);