
"use strict";

angularApp.controller("CompanyListCtrl",
    ["CompanyService",
        function (CompanyService) {
            var vm = this;
            CompanyService.getAll().then(
                function (result) {
                    vm.companies = result.data;
                },
                function (result) {
                    console.error(result);
                    toastr.error("Some error occurred. See log.");
                }
            );


        }]); // end CompanyListCtrl

angularApp.controller("CompanyEditCtrl",
    ["$http", '$stateParams', '$state', "$filter", "CompanyService",
        function ($http, $stateParams, $state, $filter, CompanyService) {

            var vm = this;

            var companyId = $stateParams.companyId;

            //vm.companyTypes = [{ name: 'Local' }, { name: 'Foreign' }, { name: 'CoverCompany' }];
            vm.companyTypes = [ 'Local' , 'Foreign' , 'CoverCompany' ];

            if (companyId) {

                CompanyService.get(companyId).then(
                    function (result) {
                        vm.company = result.data;
                    },

                    function (result) {
                        console.error(result);
                        toastr.error("Some error occurred. See log.");
                    }
                );
            };


            vm.save = function () {
                
                console.log(vm.company.companyType);
                console.log(vm.companyTypes);
                
                CompanyService.save(vm.company).then(

                    function (result) {

                        if (!vm.company._id) {

                            $state.go('companiesList');
                            toastr.success("Sucessfully saved.");
                        }

                    }, function (result) {

                        vm.error = result.data;
                        toastr.error("Some error occurred. See log.");
                    }
                );

            };


        }]); // end CompanyEditCtrl

