module.directive('hsfArray', function factory($compile) {
	return {
		restrict: 'A',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope, $element){
			console.log("element:", $element);
			console.log("array:", $scope.schema);

			$scope.model = [];

			$scope.add_element = function(){
				var index = $scope.model.length;
				var template = '<div hsf-element model="model[' + index + ']" schema="schema.element"/>';
				var compiled = $compile(template)($scope);
				console.log("compiled:", compiled);
				$element.append(compiled);
			};

			$scope.remove_element = function(){
			};

			// a test : add one element
			$scope.add_element();

		},
		link: function postLink($scope, $element, $attrs){
			$scope.model = {};
		}
	};
});
