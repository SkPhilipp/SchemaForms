angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('fixed', 'hsf-type-fixed');
});

angular.module('hsf.directives').directive('hsfTypeFixed', function factory(hsfElementScope) {
	return {
        scope: hsfElementScope,
		link: function postLink($scope){
            $scope.model = $scope.schema.value;
		}
	};
});
