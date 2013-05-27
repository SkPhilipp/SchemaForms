angular.module('hsf.directives', []);

angular.module('hsf.directives').directive('hsfForm', function factory() {
	return {
		template:	'<div class="form-horizontal">'
				+		'<div hsf-element schema="schema" model="result"></div>'
				+		'<button class="btn btn-primary" ng-disabled="!enabled" ng-click="handler(result)">Submit</button>'
				+	'</div>',
		restrict: 'EA',
		scope: {
			schema: '=',
			handler: '=',
			enabled: '='
		},
		controller: function($scope){
			$scope.result = {};
			if($scope.enabled == undefined){
				$scope.enabled = true;
			}
		}
	};
});

angular.module('hsf.directives').directive('hsfElement', function factory($compile) {

	var mapping = {
		'object': 'hsf-object',
		'array': 'hsf-array',
		'choice': 'hsf-choice',
		'string': 'hsf-input-string'
	}


	return {
		scope: {
			schema: '=',
			model: '='
		},
		compile: function($element){
			var contents = $element.contents().remove();
			var compiledContents;
			return function($scope, $element){
				var directive = mapping[$scope.schema.type];
				if(directive != undefined){
					var template = '<div ' + directive + ' model="model' + ( $scope.schema.name == undefined ? '' : '[schema.name]' ) + '" schema="schema"></div>';
					var compiled = $compile(template)($scope);
					$element.append(compiled);
				}
				else{
					console.error("Unknown schema type: " + $scope.schema.type);
				}
			};
		}
	};

});
