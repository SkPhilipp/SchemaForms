module.directive('hsfTypeObject', function factory() {
	return {
		template:	'<div data-ng-repeat="(key, value) in schema">'
				+		'<p>{{ key }}</p>'
				+		'<div hsf-input-string model="result[key]" schema="schema[key]"/>'
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
