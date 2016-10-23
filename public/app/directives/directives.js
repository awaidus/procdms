"use strict";

/*app.directive('formField', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'angularApps/partial_views/directives/form-field.html',
        scope: {
            record: '=',
            field: '@'
        }
    };
});*/

app.directive('formField', function () {
    return {
        restrict: 'AE',
        templateUrl: 'angularApps/partial_views/directives/form-element.html',
        scope: {
            field: '@',
            ngModel: '=',
            required: '?@'
        }
    };
});


/*app.directive('selectField', function () {
    return {
        replace: true,
        restrict: 'E',
        scope: false,
        template: function (element, attrs) {
            if (!angular.isDefined(attrs.defaultLabel))
                attrs.defaultLabel = "";

            return '<div class="selectBox selector">'+
                '<select name="' + attrs.name + '" ng-model="' + attrs.ngModel + '" ng-options="' + attrs.optexp + '"' + ((attrs.required) ? ' required' : '') + '></select>'+
                '</div>';
        },
        link: function (scope, el, attrs) {
            scope.$watch(attrs.ngModel, function () {
                var model = scope.$eval(attrs.ngModel);
                //when value changes, update the selectBox text
                if (angular.isDefined(model) && angular.isDefined(model.name)) {
                    el[0].firstChild.innerText = model.name;
                }
            });
        }
    }
});*/


app.directive('inputField', function () {
    return {
        restrict: 'AE',
        scope: {},
        link: function (scope, element, attr) {

            console.log(element);

            scope.field = 'inputField';
        },
        templateUrl: 'angularApps/partial_views/directives/input-field.html'
    };
});



/*app.directive('inputField', function () {
    return {
        restrict: 'E',
        scope: {
            ngModel: '=',
            field: '@',
            required: '@?'
        },
        link: function (scope) {
            scope.clear = function () {
                scope.ngModel = null;
            };
        },
        templateUrl: 'angularApps/partial_views/directives/input-field.html'
    };
});*/

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

// detect mouse over directive
app.directive('detectMouseOver', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.css('background-color', '#eeeeee');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});



app.directive('groupField', function () {
    return {
        restrict: 'E',
        transclude : true,
        templateUrl: 'angularApps/partial_views/directives/group-field.html',
        scope: {
            field: '@',
            ngModel: '='
        }
    };

}); // end inputField directive

/*app.directive('selectBox', function() {
 return {
 restrict: 'E',
 link: function() {
 return $(window).bind("load", function() {
 //this will make all your select elements use bootstrap-select
 return $('.selectpicker').selectpicker();
 });
 }
 };
 });*/




angular.module("app").directive('controlGroup', function () {
    return {
        restrict: "EA",
        templateUrl: 'angularApps/partial_views/directives/control-group.html',
        replace: true,
        transclude: true,
        require: "^form",
        scope: {
            label: "@" // Gets the string contents of the `label` attribute
        },
        link: function (scope, element, attrs, formController) {
            // The <label> should have a `for` attribute that links it to the input.
            // Get the `name` attribute from the input element
            // and add it to the scope so our template can access it.            
			var inputName = element.find(":input").attr("name");
			
			//setting id attribute
			var input = element.find(":input").attr('id', inputName);

            scope.inputName = inputName;
            scope.formName = formController.$name;
            
			scope.isError = false;
            if (inputName !== undefined) {
                // Build the scope expression that contains the validation status.
                // e.g. "form.example.$invalid"
                var error = [scope.formName, inputName, "$invalid"].join(".");
                var dirty = [scope.formName, inputName, "$dirty"].join(".");

                var errorExpression = [error, dirty].join(" && ");

                // Watch the parent scope, because current scope is isolated.
                scope.$parent.$watch(errorExpression, function (isError) {
                    scope.isError = isError;
                });
            }

        }
    }
});






app.directive('selectpicker', function ($timeout) {
    return {
        restrict: 'C',
        require: 'ngModel',
        replace: true,
        //template: '<select data-live-search="true" multiple><option ng-repeat="opt in options">{{ opt.companyName }}</option></select>',
        templateUrl: 'angularApps/partial_views/directives/select-field.html',
        scope: {
            title: '@',
            options: '='
        },
        link: function (scope, element, attrs, ngModel) {
            var $el = $(element);
            $timeout(function () {
                $el.selectpicker({
                    style: 'btn-default'
                });
            });
            $el.on('change', function (ee, aa) {
                ngModel.$setViewValue($el.val());
                scope.$apply();
            });
        }
    };
});

