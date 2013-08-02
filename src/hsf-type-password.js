angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('password', 'hsf-type-password');
});

angular.module('hsf.directives').directive('hsfTypePassword', function factory(hsfElementScope) {
	return {
		template:   '<div class="form-group">'
				+		'<label class="col-lg-3 control-label">{{ schema.title || schema.name }}</label>'
				+		'<div class="col-lg-9">'
                +			'<input type="password" class="form-control" id="{{ context.path }}"/>'
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
