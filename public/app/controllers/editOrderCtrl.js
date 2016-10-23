console.clear(); // <-- keep the console clean on refresh

"use strict";

angular.module("app").controller("EditOrderCtrl",

        function ($http, $stateParams, $state, $log, OrderService, CompaniesService, LocalSuppliers, toArrayFilter) {

            var log = $log;
            var vm = this;

            vm.id = $stateParams.id;

            //vm.disabled = vm.id <= 0;




            /* CompaniesService.getAllLocalSuppliers_dr().then(function (value) {
             //vm.localSuppliers = toArrayFilter(value);;

             //console.log(vm.localSuppliers);

             });*/


            vm.localSuppliers = toArrayFilter(LocalSuppliers.data);

            vm.refresh = function () {

                vm.localSuppliers = CompaniesService.getAllLocalSuppliers_dr().then(function (value) {
                    vm.localSuppliers = toArrayFilter(value);
                });

                console.clear();
                console.log(vm.localSuppliers);
            };

            //vm.id = 1;
            OrderService.getOrder(vm.id).then(function (value) {
                //vm.order = value;
                vm.model = value;

            });


            // function assignment
            vm.onSubmit = function () {
                /*$state.go('orderList');*/
                console.clear();

                log.info(vm.model);
            };

            vm.saveWordDocument = function () {
                console.clear();

                $http.post('/procdms/index.php/OrderCtrl/createUpdateOrder', {
                        order: vm.model
                    })
                    .success(function (data) {
                        console.log(data);
                        toastr.success("Save successfully");
                    })
                    .error(function (data) {
                        toastr.error("Some errors");
                        console.log(data);
                    });
            };

            // variable assignment
            //vm.model assigned in OrderService.getOrder due to lazy instantiation

            /*vm.col1OrderFields = [
             {
             key: 'orderNo',
             type: 'horizontalInput',
             templateOptions: {
             label: 'Order No',
             type: 'text',
             placeholder: 'Formly is terrific!',
             required: true
             }
             },
             {
             key: 'orderDate',
             type: 'horizontalInput',
             templateOptions: {
             label: 'Order Date',
             type: 'text'
             }
             },
             {
             key: 'orderTitle',
             type: 'horizontalInput',
             templateOptions: {
             label: 'Title',
             type: 'text'
             }
             },
             {
             key: 'localSupplier',
             type: 'horizontalSelect',
             templateOptions: {
             label: 'Local Suppliers',
             placeholder: 'Local Suppliers',
             valueProp: 'id',
             labelProp: 'companyName',
             options: vm.localSuppliers

             }
             },
             {
             key: 'transshipment',
             type: 'horizontalCheckbox',
             templateOptions: {
             label: 'Remember Me'
             }
             }
             ];*/

            /*vm.originalFields = angular.copy(vm.fields);*/


            // function definition
            /*function onSubmit() {
             alert(JSON.stringify(vm.model), null, 2);
             }*/

            vm.createUpdateOrder = function () {
                console.clear();

                $http.post('/procdms/index.php/supplyorder/createUpdateOrder', {
                        order: vm.model
                    })
                    .success(function (data) {
                        console.clear();
                        console.log(data);
                        toastr.success("Save successfully");
                        //$state.go('getorder.order', {'id': data.id});
                    })
                    .error(function (data) {
                        toastr.error("Some errors");
                        console.log(data);
                    });

            };


            /*

             vm.address = {};
             vm.refreshAddresses = function (address) {
             var params = {address: address, sensor: false};
             return $http.get(
             'http://maps.googleapis.com/maps/api/geocode/json',
             {params: params}
             ).then(function (response) {
             vm.addresses = response.data.results
             });
             };

             function refreshSuppliers(field) {
             var promise;
             //if (!supplier) {
             //    promise = $q.when({data: {results: []}});
             //} else {
             //    var params = {address: address, sensor: false};
             //    var endpoint = '//maps.googleapis.com/maps/api/geocode/json';
             //    promise = $http.get(endpoint, {params: params});
             //}
             //return promise.then(function(response) {
             //    field.templateOptions.options = response.data.results;
             //});

             promise = CompaniesService.getAllLocalSuppliers_dr();

             return  promise.then(function (response) {

             field.templateOptions.options = response;
             //vm.localSuppliers12 = value;
             console.log(response);
             });
             }

             */

            /* vm.country = {};
             vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
             {name: 'Afghanistan', code: 'AF'},
             {name: 'Åland Islands', code: 'AX'},
             {name: 'Albania', code: 'AL'},
             {name: 'Algeria', code: 'DZ'},
             {name: 'American Samoa', code: 'AS'}
             ];
             */


        }); // end EditOrderCtrl

