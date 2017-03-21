
	APPLIB

    .directive('otraDirectiva', function() {

        var Controller = [            
            '$scope',
            '$element',
        function(
            $scope,
            $element
        ) {

            var vm = this;            
            vm.env = $scope.env;
            vm.unarray = $scope.unarray;
        }];

        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directive/otra-directiva/otra-directiva.html',
            controller: Controller,
            controllerAs: 'vm',
            scope: {
                env: '=',
                unarray: '='
            }
        };
    });