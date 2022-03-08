(function(){
'use strict';
    angular.module('BindingApp',[])
        .controller('BindingController',BindingController);

    BindingController.$inject = ['$scope'];
    function BindingController($scope){
        $scope.firstName = "Patrick";
        //$scope.fullName = ""; //Sinon, le fullName est initialisé une fois et comme on est sur un :: One time binding il n'y aura plus de watcher et il ne sera plus mis à jour. 

        $scope.showNumberOfWatchers = function(){
            console.log("# of Watchers : ",$scope.$$watchersCount);
        };

        $scope.setFullName = function(){
            $scope.fullName = $scope.firstName + " " + "ANNOOT";

        };

        $scope.logFirstName = function(){
            console.log("First name is : ",$scope.firstName);
        };

        $scope.logFullName = function(){

            console.log("Full name is : ",$scope.fullName);
        };





    }

})();