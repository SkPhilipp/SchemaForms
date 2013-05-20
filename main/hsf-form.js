var module = angular.module('hsf', []);

module.directive('hsfForm', function factory() {
	return {
		template:	'<div>'
				+		'<div data-ng-repeat="(index, content) in schema">'
				+			'<div hsf-type-element schema="content" model="result"/>'
				+		'</div>'
				+	'</div>'
				+	'<a class="btn btn-primary" ng-click="handler(result)">Submit</a>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			handler: '='
		},
		controller: function($scope){
			console.log("form:", $scope.schema);
			$scope.result = {};
		},
		link: function postLink($scope, $element, $attrs){
		}
	};
});
