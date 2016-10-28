
"use strict";

angularApp.factory("CompanyService",

    ["$http", function ($http) {

        var service = {};
        var apiURL = '/api/companies/';

        service.getAll = function () {
            return $http.get(apiURL);
        };

        service.get = function (id) {
            return $http.get(apiURL + 'get/' + id);
        };

        service.save = function (record) {

            if (record._id) {
                return $http.post(apiURL + 'update', record);
            }            
            return $http.post(apiURL + 'create', record);
        };

        return service;

    }]);
