module.directive('hsfArray', function factory($compile) {
	return {
		template:	'<div>'
				+		'<a class="btn" ng-click="add_element()">Add</a>'
				+		'<a class="btn" ng-click="remove_element()">Remove</a>'
				+	'</div>',
		restrict: 'A',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope, $element){
			console.log("array:", $scope.schema);
			console.log("element:", $element);
			var length = 0;
			$scope.model = [];

			$scope.add_element = function(){
				// here we compile the template, with a static reference to the model element
				var template = '<div hsf-element model="model[' + length + ']" schema="schema.kids"/>';
				var compiled = $compile(template)($scope);
				$element.append(compiled);
				length++;
			};

			$scope.remove_element = function(){
				var children = $element.children();
				children[children.length - 1].remove();
				length--;
			};

		},
		link: function postLink($scope, $element, $attrs){
		}
	};
});
