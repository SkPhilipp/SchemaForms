module.directive('hsfTypeElement', function factory() {
	return {
		template:	'<div ng-switch on="schema.type">'
				+		'<div ng-switch-when="string">'
				+			'<div><div hsf-input-string model="model[schema.name]" schema="schema"></div></div>'
				+		'</div>'
				+		'<div ng-switch-when="choice">'
				+			'<div><div hsf-type-choice model="model[schema.name]" schema="schema"></div></div>'
				+		'</div>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
			console.log('hte:schema:', $scope.schema);
			if($scope.schema.type == 'array'){
				console.log('initializing array');
				$scope.model = [];
			}
			if($scope.schema.type == 'object'){
				console.log('initializing object');
				$scope.model = {};
			}
		},
		link: function postLink($scope, $element, $attrs){
			/* ... */
		}
	};
});
