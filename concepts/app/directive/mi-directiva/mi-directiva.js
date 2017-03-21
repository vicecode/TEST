
	APPLIB

    .directive('miDirectiva', function() {

        var Controller = [            
            '$scope',
            '$interval',
            'MiServicio',
        function(
            $scope,
            $interval,
            MiServicio
        ) {

            var vm = this;

            vm.MS = MiServicio;

            $interval(function() {
            
                vm.MS.getSysInfo();
            }, 500);
        }];

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directive/mi-directiva/mi-directiva.html',
            controller: Controller,
            controllerAs: 'vm',
            scope: true
        };
    });