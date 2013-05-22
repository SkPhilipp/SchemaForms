module.directive('hsfElement', function factory($compile) {

	var mapping = {
		'string': '<div hsf-input-string model="model[schema.name]" schema="schema"></div>',
		'choice': '<div hsf-choice model="model" schema="schema"></div>',
		'object': '<div hsf-object model="model[schema.name]" schema="schema"></div>'
	};

	return {
		restrict: 'A',
		scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
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
