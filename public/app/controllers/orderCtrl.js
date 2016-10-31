
"use strict";

angularApp.controller("OrderListCtrl",
    ["OrderService",
        function (OrderService) {

            var vm = this;
            OrderService.getAll().then(
                function (result) {
                    vm.orders = result.data;                    
                },
                function (result) {
                    console.error(result);
                    toastr.error("Some error occurred. See log.");
                    vm.error = result; 
                }
            );


        }]); // end OrderListCtrl

angularApp.controller("OrderSingleCtrl",
    ["OrderService", '$stateParams', "$filter", "$rootScope",
        function (OrderService, $stateParams, $filter, $rootScope) {

            var vm = this;
            vm.pageTitle = 'Contract';
            var orderId = $stateParams.orderId;
            /*vm.order = {};
            vm.order.orderNo = "Loading...."*/

            if (orderId) {
                OrderService.get(vm.orderId).then(
                    function (result) {
                        vm.order = result.data;
                        vm.order.orderDate = $filter('date')(vm.order.orderDate, "dd-MM-yyyy")
                    },
                    function (result) {
                        console.error(result);
                        toastr.error("Some error occurred. See log.");
                        vm.error = result; 
                    }
                );
            };


        }]); // end OrderSingleCtrl

angularApp.controller("OrderEditCtrl",
    ['$stateParams', '$state', "$filter", "OrderService", "CompanyService", "$rootScope",
        function ($stateParams, $state, $filter, OrderService, CompanyService, $rootScope) {

            var vm = this;
            vm.pageTitle = "Contract";

            vm.orderTypes = ['DIRECT', 'DRAFT', 'FOR'];
            vm.shipModes = ['SEA', 'AIR'];
            

            CompanyService.getAll().then(
                function (result) {
                    vm.localSuppliers = $filter('filter')(result.data, { companyType: "Local" });
                    vm.foreignSuppliers = $filter('filter')(result.data, { companyType: "Foreign" });
                    vm.coverCompanies = $filter('filter')(result.data, { companyType: "CoverCompany" });
                }
            );

            vm.orderId = $stateParams.orderId;

            if (vm.orderId) {
                vm.order = {};
                
                //vm.order.orderDate = $filter('date')(vm.order.orderDate, "dd-MM-yyyy")

                OrderService.get(vm.orderId).then(                    
                    function (result) {
                        vm.order = result.data;                        
                        vm.order.orderDate = $filter('date')(vm.order.orderDate, "dd-MM-yyyy")                      
                    },
                    function (result) {
                        console.error(result);
                        toastr.error("Some error occurred. See log.");
                        vm.error = result; 
                    }
                );
            };


            vm.save = function () {

                //console.info((vm.order.coverCompany)? vm.order.coverCompany.companyCode : null); return;

                OrderService.save(vm.order).then(
                    function (result) {
                        toastr.success("Sucessfully saved");

                        if (!vm.order._id) {
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


        }]); // end OrderEditCtrl

