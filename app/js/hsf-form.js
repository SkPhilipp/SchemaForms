angular.module('hsf.directives', []);

angular.module('hsf.directives').directive('hsfForm', function factory() {
	return {
		template:	'<div class="form-horizontal">'
				+		'<div hsf-element schema="schema" model="result"></div>'
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
		}
	};
});
