module.directive('hsfInputString', function factory() {
	return {
		template:	'<div>'
				+		'<input type="text"/>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			model: '=',
			schema: '='
		},
		controller: function($scope){
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
