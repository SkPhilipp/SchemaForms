angular.module('hsf.directives').directive('hsfElement', function factory($compile) {

	var mapping_named = {
		'string': '<div hsf-input-string model="model[schema.name]" schema="schema"></div>',
		'file': '<div hsf-input-file model="model[schema.name]" schema="schema"></div>',
		'array': '<div hsf-array model="model[schema.name]" schema="schema"></div>',
		'choice': '<div hsf-choice model="model" schema="schema"></div>',
		'object': '<div hsf-object model="model[schema.name]" schema="schema"></div>'
	};

	var mapping_nameless = {
		'string': '<div hsf-input-string model="model" schema="schema"></div>',
		'file': '<div hsf-input-file model="model" schema="schema"></div>',
		'array': '<div hsf-array model="model" schema="schema"></div>',
		'choice': '<div hsf-choice model="model" schema="schema"></div>',
		'object': '<div hsf-object model="model" schema="schema"></div>'
	};

	return {
		restrict: 'A',
		scope: {
			schema: '=',
			model: '='
		},
		compile: function($element){
			var contents = $element.contents().remove();
			var compiledContents;
			return function($scope, $element){
				var mapping = $scope.schema.name == undefined ? mapping_nameless : mapping_named;
				compiled = $compile(mapping[$scope.schema.type])($scope);
				$element.append(compiled);
			};
		}
	};

});
