
"use strict";

angularApp.controller("OrderListCtrl",
    ["OrderService", "CompanyService",
        function (OrderService, CompanyService) {

            var vm = this;
            OrderService.getAll().then(
                function (result) {
                    vm.orders = result.data;
                    console.log(vm.orders);

                },
                function (result) {
                    console.error(result.data);
                    toastr.error("Some error occurred. See log.");
                }
            );


        }]); // end OrderListCtrl

angularApp.controller("EditOrderCtrl",
    ["$http", '$stateParams', '$state', "$filter", "OrderService", "CompanyService",
        function ($http, $stateParams, $state, $filter, OrderService, CompanyService) {

            var vm = this;

            vm.orderType = ['DIRECT', 'DRAFT', 'FOR'];

            CompanyService.getAll().then(
                function (result) {
                    vm.companies = result.data;
                }
            );

            vm.orderId = $stateParams.orderId;

            if (vm.orderId) {
                OrderService.get(vm.orderId).then(
                    function (result) {
                        vm.order = result.data.data;
                        vm.order.orderDate = $filter('date')(vm.order.orderDate, "dd-MM-yyyy")
                    },
                    function (result) {
                        console.error(result);
                        toastr.error("Some error occurred. See log.");
                    }
                );
            };


            vm.save = function () {

                OrderService.save(vm.order).then(

                    function (result) {

                        if (!vm.order._id) {
                            $state.go('home');
                            toastr.success("Sucessfully saved.");
                            //$state.go('getorder.order', result.data.id );
                            /*     if (vm.orderId !== result.data.id) {
                                     angular.copy(vm.orderId, result.data.id);
                                 } */
                        }

                    }, function (result) {
                        console.error(result.data);
                        toastr.error("Some error occurred. See log.");
                    }
                );

            };


        }]); // end EditOrderCtrl

