"use strict";

app.directive('formField', function () {
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

app.directive('checkboxField', function () {
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
        templateUrl: 'angularApps/partial_views/directives/checkbox-field.html'
    };
});

