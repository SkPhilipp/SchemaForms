angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('object', 'hsf-type-object');
});

angular.module('hsf.directives').directive('hsfTypeObject', function factory() {
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