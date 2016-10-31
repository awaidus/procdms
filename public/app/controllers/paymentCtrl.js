
"use strict";


angularApp.controller("PaymentCtrl",
    ["$http", '$stateParams', '$state', "$filter", "OrderService", "PaymentService", "CompanyService",
        function ($http, $stateParams, $state, $filter, OrderService, PaymentService, CompanyService) {

            var vm = this;

            vm.paymentMode = ['LC', 'TT'];
            vm.shipmentMode = ['SEA', 'AIR'];

            vm.orderId = $stateParams.orderId;
            vm.paymentId = $stateParams.paymentId;

            if (vm.paymentId) {
                PaymentService.get(vm.paymentId).then(
                    function (result) {
                        vm.payment = result.data;
                        //vm.payment.feReleaseDate = $filter('date')(vm.payment.feReleaseDate, "dd-MM-yyyy")
                    },
                    function (result) {
                        console.error(result);                        
                        toastr.error("Some error occurred. See log.");
                        vm.error = result; 
                    }
                );
            };


            vm.save = function () {

                PaymentService.save(vm.orderId, vm.payment).then(
                    function (result) {
                        toastr.success("Sucessfully saved");

                        if (!vm.payment._id) {
                            $state.go('home');
                            toastr.success("Sucessfully saved.");
                            //$state.go('getorder.order', result.data.id );
                            /*     if (vm.orderId !== result.data.id) {
                                     angular.copy(vm.orderId, result.data.id);
                                 } */
                        }

                    }, function (result) {
                        console.error(result);
                        toastr.error("Some error occurred. See log.");
                        vm.error = result; 
                    }
                );

            };


        }]); // end PaymentEditCtrl

