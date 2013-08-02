angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('text', 'hsf-type-text');
	hsfElementProvider.register('json', 'hsf-type-text');
});

angular.module('hsf.directives').directive('hsfTypeText', function factory(hsfElementScope) {
	return {
		template:   '<div class="form-group">'
				+		'<label class="col-lg-3 control-label">{{ schema.title || schema.name }}</label>'
				+		'<div class="col-lg-9">'
                +			'<textarea class="form-control" rows="{{ rows }}" id="{{ context.path }}"/>'
				+		'</div>'
				+	'</div>',
		scope: hsfElementScope,
		link: function postLink($scope, $element){
			var input = $element.find('textarea');
            $scope.rows = $scope.schema.rows || 4;
			$scope.model = "";
			input.val($scope.model);
			input.bind('keyup', function(event){
				$scope.model = input.val();
				$scope.$apply();
			});
		}
	};
});
