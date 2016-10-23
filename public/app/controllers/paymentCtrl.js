"use strict";

angular.module("app").controller("PaymentCtrl",
    ["$http", '$stateParams', '$state', "$filter", "OrderService",
        function ($http, $stateParams, $state, $filter, OrderService) {

            var vm = this;

            vm.orderId = $stateParams.id;
            vm.paymentId = $stateParams.paymentId;

            OrderService.getAllPayments(vm.orderId).then(
                function (result) {
                    vm.payments = result.data;
                },
                function (result) {
                    console.log(result.data);
                    toastr.error("Some error occurred. See log.");
                }
            );
            OrderService.getPayment(vm.paymentId).then(
                function (result) {
                    vm.payment = result.data;
                    console.log(vm.payment);
                },
                function (result) {
                    console.log(result.data);
                    toastr.error("Some error occurred. See log.");
                }
            );

            vm.submitPaymentForm = function () {

                OrderService.savePayment(vm.payment).then(
                    function (result) {
                        console.log(vm.payment);
                        console.log('submitted...');
                        console.log(result.data);

                        toastr.success('Successful submitted');
                    },
                    function (result) {
                        console.log(result.data);
                        toastr.error("Some error occurred. See log.");
                    }
                );
            };

        }]); // end PaymentCtrl


