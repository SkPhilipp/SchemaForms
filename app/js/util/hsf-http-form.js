angular.module('hsf.directives').directive('hsfHttpForm', function factory() {
	return {
		template: '<div hsf-form schema="schema" handler="handler" enabled="enabled"/>',
		transclude: true,
		restrict: 'EA',
        scope: {
			schema: '=',
			success: '=',
			error: '='
		},
		controller: function($scope, $http, $attrs){
			$attrs.$observe('url', function(value){
				$scope.url = angular.isDefined(value) ? value : window.location.href;
			});
			// initially enable the form
			$scope.enabled = true;
			$scope.handler = function(data){
				// disable when submitted
				$scope.enabled = false;
				$http.post($scope.url, data).
					success(function(data, status, headers, config) {
						$scope.success(data, status, headers, config);
						// enable again after success completes
						$scope.enabled = true;
					}).
					error(function(data, status, headers, config) {
						$scope.error(data, status, headers, config);
						// enable again after error completes
						$scope.enabled = true;
					});
			};
		}
	};
});
