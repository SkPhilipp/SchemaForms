module.directive('hsfTypeChoice', function factory() {
	return {
		template:	'<div data-ng-repeat="(key, value) in schema.choices">'
				+		'<p>{{ value.name }}</p>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
			console.log('htc:schema', $scope.schema);
			console.log('htc:model', $scope.model);
		},
		link: function postLink($scope, $element, $attrs){
			/* ... */
		}
	};
});
