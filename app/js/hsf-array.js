angular.module('hsf.directives').directive('hsfArray', function factory($compile) {
	return {
		template:	'<fieldset>'
				+		'<legend>'
				+		'<button class="btn" ng-click="add_element()" ng-disabled="length == max">Add</button> '
				+		'<button class="btn" ng-click="remove_element()" ng-disabled="length == min">Remove</button> '
				+		'{{ schema.title }} '
				+		'</legend>'
				+	'</fieldset>',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope, $element){

			$scope.min = $scope.schema.min || 0;
			$scope.max = $scope.schema.max || Infinity;
			$scope.length = 0;
			$scope.model = [];

			$scope.add_element = function(){
				// here we compile the template, with a static reference to the model element
				var template = '<div hsf-element model="model[' + $scope.length + ']" schema="schema.kids"/>';
				var compiled = $compile(template)($scope);
				$element.append(compiled);
				$scope.length++;
			};

			$scope.remove_element = function(){
				var children = $element.children();
				children[children.length - 1].remove();
				$scope.length--;
			};

			while($scope.length < $scope.min){
				$scope.add_element();
			}

		}
	};
});
