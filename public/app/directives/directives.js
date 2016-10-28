
"use strict";

angularApp.directive('formField', function () {
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

angularApp.directive('checkboxField', function () {
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


