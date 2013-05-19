module.directive('hsfTypeObject', function factory() {
	return {
		template:	'<div data-ng-repeat="(index, content) in schema">'
				+		'<div hsf-type-element schema="schema[index]" model="model"/>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			handler: '=',
			model: '='
		},
		controller: function($scope){
			$scope.model = {};
		},
		link: function postLink($scope, $element, $attrs){
		}
	};
});
