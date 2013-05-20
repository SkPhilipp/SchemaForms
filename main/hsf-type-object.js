module.directive('hsfTypeObject', function factory() {
	return {
		template:	'<div data-ng-repeat="(index, content) in schema.fields">'
				+		'<div hsf-type-element model="model" schema="content"/>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
			console.log("object:", $scope.schema);
		},
		link: function postLink($scope, $element, $attrs){
			$scope.model = {};
		}
	};
});
