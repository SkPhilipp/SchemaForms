module.directive('hsfTypeElement', function factory($compile) {

	var mapping = {
		'string': '<div><div hsf-input-string model="model[schema.name]" schema="schema"></div></div>',
		'choice': '<div><div hsf-type-choice model="model" schema="schema"></div></div>',
		'object': '<div><div hsf-type-object model="model[schema.name]" schema="schema"></div></div>'
	};

	return {
		restrict: 'A',
		scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
			console.log("element:", $scope.schema);
		},
		compile: function($element){
			var contents = $element.contents().remove();
			var compiledContents;
			return function($scope, $element){
				compiled = $compile(mapping[$scope.schema.type])($scope);
				$element.append(compiled);
			};
		}
	};

});
