
"use strict";

angularApp.factory("PaymentService",

    ["$http", function ($http) {

        var service = {};
        var apiURL = '/api/payments/';

        service.getAll = function () {
            return $http.get(apiURL);
        };

        service.get = function (id) {
            return $http.get(apiURL + 'get/' + id);
        };

        service.save = function (orderId, record) {

            if (record._id) {
                return $http.post(apiURL + 'update', record);
            }
            return $http.post(apiURL + 'create/' + orderId, record);
        };

        return service;

    }]);
