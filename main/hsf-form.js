var module = angular.module('hsf', []);

module.directive('hsfForm', function factory() {
	return {
		template:	'<div>'
				+		'<div hsf-type-object schema="schema" result="result" handler="handler"/>'
				+	'</div>'
				+	'<a class="btn btn-primary" ng-click="submit()">Submit</a>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			handler: '='
		},
		controller: function($scope){
			$scope.submit = function(){
				console.log($scope.result);
			};
		},
		link: function postLink($scope, $element, $attrs){
			/* ... */
		}
	};
});
