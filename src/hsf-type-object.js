angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('object', 'hsf-type-object');
});

angular.module('hsf.directives').directive('hsfTypeObject', function factory(hsfElementScope) {
	return {
		template:	'<div data-ng-repeat="(index, subschema) in schema.fields">'
				+		'<div hsf-element model="model" schema="subschema" context="subcontext[index]"/>'
				+	'</div>',
		scope: hsfElementScope,
		controller: function($scope){
			// copy the contex for all fields and add the correct path
			$scope.subcontext = [];
			for(index in $scope.schema.fields){
				$scope.subcontext[index] = angular.copy($scope.context);
				if($scope.schema.fields[index].name != null){
					$scope.subcontext[index].path += '.' + $scope.schema.fields[index].name;
				}
			}
			// initialize the model as an empty object
			$scope.model = {};
		}
	};
});