angular.module('hsf.directives').directive('hsfObject', function factory() {
	return {
		template:	'<div data-ng-repeat="(index, content) in schema.fields">'
				+		'<div hsf-element model="model" schema="content"/>'
				+	'</div>',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
			$scope.model = {};
		}
	};
});
