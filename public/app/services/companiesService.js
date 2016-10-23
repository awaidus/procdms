"use strict";
angular.module("app")
    .factory("CompaniesService", function($http, $q){

        var companies = {};

        companies.getAllLocalSuppliers = function() {
            var promise = $http({
                method: 'GET',
                url: '/procdms/index.php/companies/localSuppliers'
            });
            promise.success(function(data, status, headers, conf) {
                return data;
            });
            return promise;
        };


        companies.getAllLocalSuppliers_dr = function () {
            var defer = $q.defer();

            $http.get('/procdms/index.php/CompanyCtrl/localSuppliers')
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    toastr.error("Some errors occurred");
                    console.log(data);
                });

            return defer.promise;
        };

        return companies;

    });
