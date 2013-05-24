var module = angular.module('hsf', []);

module.directive('hsfForm', function factory() {
	return {
		template:	'<div class="form-horizontal">'
				+		'<div data-ng-repeat="(index, content) in schema">'
				+			'<div hsf-element schema="content" model="result"/>'
				+		'</div>'
				+		'<a class="btn btn-primary" ng-click="handler(result)">Submit</a>'
				+	'</div>',
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
