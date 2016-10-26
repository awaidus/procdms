(function () {
    "use strict";

    var angularApp = angular.module("app");


    angularAppapp.directive('formField', function () {
        return {
            restrict: 'AE',
            templateUrl: '/app/views/directives/form-field.html',
            scope: {
                label: '@',
                field: '@',
                record: '='
            }
        };
    });

    angularAppapp.directive('checkboxField', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                field: '@',
                ngTrueValue: '@?',
                ngFalseValue: '@?'
            },
            link: function (scope) {
                scope.clear = function () {
                    scope.ngModel = null;
                };
            },
            templateUrl: '/app/views/directives/checkbox-field.html'
        };
    });


});