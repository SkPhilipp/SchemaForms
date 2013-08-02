angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('string', 'hsf-type-string');
});

angular.module('hsf.directives').directive('hsfTypeString', function factory(hsfElementScope) {
	return {
		template:   '<div class="form-group">'
				+		'<label class="col-lg-3 control-label">{{ schema.title || schema.name }}</label>'
				+		'<div class="col-lg-9">'
                +			'<input type="text" class="form-control col-lg-9" id="{{ context.path }}"/>'
				+		'</div>'
				+	'</div>',
		scope: hsfElementScope,
		link: function postLink($scope, $element){
			var input = $element.find('input');
			$scope.model = "";
			input.val($scope.model);
			input.bind('keyup', function(event){
				$scope.model = input.val();
				$scope.$apply();
			});
		}
	};
});
