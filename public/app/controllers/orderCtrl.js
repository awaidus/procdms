"use strict";
var app = angular.module("app");

app.controller("OrderListCtrl",
    ["OrderService", 
        function (OrderService) {

            var vm = this;

            OrderService.getAll().then(
                function (result) {
                    vm.orders = result.data;
                    console.log(result.data); 
                },
                function (result) {
                    console.error(result.data);                    
                    toastr.error("Some error occurred. See log.");
                }
            );


        }]); // end OrderCtrl


"use strict";

app.controller("EditOrderCtrl",
    ["$http", '$stateParams', '$state', "$filter", "OrderService", "$uibModal", "cfpLoadingBar",
        function ($http, $stateParams, $state, $filter, OrderService, $uibModal, cfpLoadingBar) {

            var vm = this;

            //vm.contact = [{orderNo: 123}];

            vm.data = {};
            vm.order = {};
            vm.file = {};


            vm.order.orderNo = 'testing';
            vm.order.orderId = $stateParams.orderId;

            vm.orderType = ['DIRECT', 'DRAFT', 'FOR'];

            //vm.orderNo = true;

            /*OrderService.getAllShippingDoc().then(
             function (result) {
             vm.shippingDocuments = result.data;
             },
             function (result) {
             console.log(result.data);
             toastr.error("Some error occurred. See log.");
             }
             );*/

            OrderService.getSuppliersLocal().then(
                function (result) {
                    /*vm.localSuppliers = $filter('filter')(result.data, {companyType: "Local"});
                     vm.foreignSuppliers = $filter('filter')(result.data, {companyType: "Foreign"});
                     vm.coverCompanies = $filter('filter')(result.data, {companyType: "Cover Company"});*/
                    console.info(result.data);

                    //vm.localSuppliers = result.data;

                },
                function (result) {
                    console.error(result);
                    cfpLoadingBar.complete();
                    toastr.error("Error. See log.");
                }
            );

            if ($stateParams.orderId !== 0) {

                OrderService.getOrder($stateParams.orderId).then(
                    function (result) {
                        if (result.data !== null){
                            vm.order = result.data;
                        }
                        console.log(vm.order);

                        //vm.order.orderId = $stateParams.id;
                    },
                    function (result) {
                        console.log(result.data);
                        cfpLoadingBar.complete();
                        toastr.error("Some error occurred. See log.");
                    }
                );
            }


            vm.submitOrderForm = function () {

                //angular.copy(angular.extend(vm.order, vm.project), vm.data);


                OrderService.saveOrder(vm.order).then(
                    function (result) {

                        toastr.success('Order successful saved');

                        console.log(result.data);

                        //$state.go('getorder.order', result.data.id );
                        /*if (vm.orderId !== result.data.id) {
                         angular.copy(vm.orderId, result.data.id);
                         }*/
                    },
                    function (result) {
                        toastr.error("Error in Order saving. See log.");
                        cfpLoadingBar.complete();
                    }
                );
                /* $http.post('/procdms/index.php/OrderCtrl/createUpdate', {
                 order: vm.model
                 }).success(function (result) {
                 });*/

            };

            vm.file.template = 'E:/Awaidus/Web Projects/wwwPHP/ProcDMS/assets/templates/CONTRACT-PBE.docx';
            vm.file.fileName = 'C:/Users/awaidus/Desktop/CONTRACT-PBE.docx';

            vm.wordDocumentFile = function () {

                var orderDetails = {};
                //angular.equals({}, vm.data

                OrderService.getAllOrdersDetails(vm.orderId).then(
                    function (result) {
                        console.log(result);

                        OrderService.wordDocument(result, vm.file.template, vm.file.fileName).then(
                            function (result) {
                                console.log('Word Document ...');
                                console.log(result.data);
                                toastr.success('Word file successful saved');

                            },

                            function (result) {
                                console.error(result);
                                cfpLoadingBar.complete();
                                toastr.error("Some error occurred in word document. See log.");
                            }
                        );

                    },
                    function (result) {
                        toastr.error("Some error occurred in retrieving data. See log.");
                        console.error(result);
                        cfpLoadingBar.complete();
                    }
                );
                /* OrderService.wordDocument(vm.model, vm.file.template, vm.file.fileName).then(
                 function (result) {
                 console.log('Word Document ...');
                 console.log(result.data);
                 toastr.success('Successful word file saved');

                 },
                 function (result) {
                 console.log(result.data);
                 toastr.error("Some error occurred in word document. See log.");
                 }
                 );*/

            };

            vm.saveShippingDoc = function () {

                OrderService.saveShippingDoc (vm.shipDoc).then (
                    function (result) {
                        console.log(vm.shipDoc);
                        console.log('submitted...');
                        console.log(result.data);

                        toastr.success('Successful submitted');
                    },
                    function (result) {
                        console.error(result.data);
                        cfpLoadingBar.complete();
                        toastr.error("Some error occurred. See log.");
                    }
                );

            };

            /*vm.openReqDocModal = function () {
             var modalInstance = $uibModal.open({
             templateUrl: 'angularApps/partial_views/order/shipping-document.html',
             controller: 'OrderCtrl as vm'
             //size: 'lg'
             });
             modalInstance.result.then(function () {
             console.log('...');
             }, function () {
             console.log('Modal dismissed at: ' + new Date());
             });
             };*/

            vm.openReqDocModal = function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'angularApps/partial_views/order/shipping-document.html',
                    controller: function ($scope, $uibModalInstance) {

                        $scope.closeModal = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
                });
            };


            vm.closeModal = function () {

                console.log('close modal');

                modalInstance.$dismiss('cancel');
                modalInstance.$closeModal('cancel');
                modalInstance.$close('cancel');
            };


        }]); // end OrderCtrl


