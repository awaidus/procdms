"use strict";
var app = angular.module("app");

app.controller("OrderListCtrl",
    ["OrderService",
        function (OrderService) {

            var vm = this;

            OrderService.getAll().then(
                function (result) {
                    vm.orders = result.data.data;
                },
                function (result) {
                    console.error(result.data);
                    toastr.error("Some error occurred. See log.");
                }
            );


        }]); // end OrderListCtrl


"use strict";

app.controller("EditOrderCtrl",
    ["$http", '$stateParams', '$state', "$filter", "OrderService",
        function ($http, $stateParams, $state, $filter, OrderService) {

            var vm = this;

            vm.orderId = $stateParams.orderId;

            vm.orderType = ['DIRECT', 'DRAFT', 'FOR'];

            if (vm.orderId) {
                OrderService.get(vm.orderId).then(
                    function (result) {
                        
                        vm.order = result.data.data;
                        vm.order.orderDate = $filter('date')(vm.order.orderDate, "dd-MM-yyyy")
                    },
                    function (result) {
                        console.error(result);
                        //toastr.error("Some error occurred. See log.");
                    }
                );
            };


            vm.save = function () {

                console.info(vm.order._id);

                OrderService.save(vm.order).then(

                    function (result) {

                        console.info(result.data);

                        if (vm.order._id) {
                        //$state.go('home');
                        //$state.go('getorder.order', result.data.id );
                       /*     if (vm.orderId !== result.data.id) {
                                angular.copy(vm.orderId, result.data.id);
                            } */                               
                        }
                        
                    }, function (result) {
                        console.error(result.data);
                    }
                );

            };


        }]); // end EditOrderCtrl


