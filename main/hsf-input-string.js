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
			console.log("string:", $scope.schema);
		},
		link: function postLink($scope, $element, $attrs){
			var input = $element.find('input');
			$scope.model = "";
			input.val($scope.model);
			input.bind('keyup', function(event){
				$scope.model = input.val();
				$scope.$apply();
			});
		}
	};
});
