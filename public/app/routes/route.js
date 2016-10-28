
'use strict';

angularApp.config([
    "$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to homepage
        $urlRouterProvider.otherwise("/home");

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/app/views/order/index.html",
                controller: 'OrderListCtrl as vm'
            })
            .state('orderList', {
                url: "/order/getorders",
                templateUrl: "/app/views/order/index.html",
                controller: 'OrderListCtrl as vm'
            })
            .state('getorder', {
                abstract: true,
                url: "/order/getorder/:orderId",
                templateUrl: "/app/views/order/order-layout.html"
            })

            .state('getorder.order', {
                url: "/order",
                templateUrl: "/app/views/order/order.html",
                controller: 'EditOrderCtrl as vm'
            })
            .state('getorder.payment', {
                url: "/payment/:paymentId",
                templateUrl: "/app/views/payment/payment.html",
                controller: 'PaymentCtrl as vm'
            })
            .state('getorder.shipment', {
                url: "/shipment/:shipmentId",
                templateUrl: "/app/views/shipment/shipment.html"
            })
            .state('companiesList', {
                url: "/companies",
                templateUrl: "/app/views/company/index.html",
                controller: 'CompanyListCtrl as vm'
            })
            .state('getcompany', {
                url: "/company/:companyId",
                templateUrl: "/app/views/company/company.html",
                controller: "CompanyEditCtrl as vm"
            })



            .state('test', {
                url: "/testing",
                templateUrl: "angularApps/partial_views/test/test.html",
                controller: 'EditOrderCtrl as vm',
                resolve: {
                    LocalSuppliers: ['CompaniesService', function (CompaniesService) {
                        return CompaniesService.getAllLocalSuppliers();
                    }]
                }

            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "angularApps/partials/state2.list.html",
                controller: function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });

    }]);



/*app.config(["formlyConfigProvider", function(formlyConfigProvider){
    // set templates here
    formlyConfigProvider.setWrapper({
        name: 'horizontalBootstrapLabel',
        template: [
            '<label for="{{::id}}" class="col-sm-3 control-label">',
            '{{to.label}} {{to.required ? "*" : ""}}',
            '</label>',
            '<div class="col-sm-9">',
            '<formly-transclude></formly-transclude>',
            '</div>'
        ].join(' ')
    });
 
    formlyConfigProvider.setWrapper({
        name: 'horizontalBootstrapCheckbox',
        template: [
            '<div class="col-sm-offset-3 col-sm-8">',
            '<formly-transclude></formly-transclude>',
            '</div>'
        ].join(' ')
    });
 
    formlyConfigProvider.setType({
        name: 'horizontalInput',
        extends: 'input',
        wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
    });
 
    formlyConfigProvider.setType({
        name: 'horizontalCheckbox',
        extends: 'checkbox',
        wrapper: ['horizontalBootstrapCheckbox', 'bootstrapHasError']
    });
 
    formlyConfigProvider.setType({
        name: 'horizontalSelect',
        extends: 'select',
        wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
    });
 
    formlyConfigProvider.setType({
        name: 'async-ui-select',
        extends: 'select',
        templateUrl: 'async-ui-select-type.html'
    });
	
    formlyConfigProvider.setType({
      name: 'ui-select',
      extends: 'select',
      template: '<ui-select ng-model="model[options.key]" theme="selectize" ng-required="{{to.required}}" ng-disabled="{{to.disabled}}" reset-search-input="false"> <ui-select-match placeholder="{{to.placeholder}}"> {{$select.selected[to.labelProp || \'name\']}} </ui-select-match> <ui-select-choices group-by="to.groupBy" repeat="option[to.valueProp || \'value\'] as option in to.options | filter: $select.search"> <div ng-bind-html="option[to.labelProp || \'name\'] | highlight: $select.search"></div> </ui-select-choices> </ui-select>'
    });
	
    
    formlyConfigProvider.setType({
      name: 'horizontal-ui-select',
      extends: 'ui-select',
      wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
    });
	
 
	
 
 
 
}]);*/




angularApp.controller('PaginationDemoCtrl', function ($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});




angularApp.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

