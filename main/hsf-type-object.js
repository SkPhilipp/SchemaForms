module.directive('hsfTypeObject', function factory() {
	return {
		template:	'<div data-ng-repeat="(index, content) in schema">'
				+		'<div hsf-type-element schema="schema[index]"/>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			handler: '=',
			result: '='
		},
		controller: function($scope){
			$scope.result = {};
		},
		link: function postLink($scope, $element, $attrs){
			/* ... */
		}
	};
});
