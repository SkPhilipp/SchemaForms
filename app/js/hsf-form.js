angular.module('hsf.directives', []);

angular.module('hsf.directives').directive('hsfForm', function factory() {
	return {
		template:	'<div class="form-horizontal">'
				+		'<div hsf-element schema="schema" model="result"></div>'
				+		'<button class="btn btn-primary" ng-disabled="!enabled" ng-click="handler(result)">Submit</button>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			handler: '=',
			enabled: '='
		},
		controller: function($scope){
			$scope.result = {};
		}
	};
});
