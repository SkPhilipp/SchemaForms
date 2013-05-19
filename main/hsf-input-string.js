module.directive('hsfInputString', function factory() {
	return {
		template:	'<div>'
				+		'<p>{{ schema.name }}</p>'
				+		'<input type="text"/>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			model: '=',
			schema: '='
		},
		controller: function($scope){
			console.log('htm:schema', $scope.schema);
			console.log('htm:model', $scope.model);
		},
		link: function postLink($scope, $element, $attrs){
			var input = $element.find('input');
			input.val($scope.model);
			input.bind('keyup', function(event){
				$scope.model = input.val();
				$scope.$apply();
			});
		}
	};
});
