angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('checkbox', 'hsf-type-checkbox');
});

angular.module('hsf.directives').directive('hsfTypeCheckbox', function factory(hsfElementScope) {
	return {
		template:	'<div class="form-group">'
                +       '<div class="checkbox">'
                    +       '<label>'
                    +           '<input type="checkbox" id="{{ context.path }}"> {{ schema.title || schema.name }}'
                    +       '</label>'
                +       '</div>'
				+	'</div>',
		scope: hsfElementScope,
		link: function postLink($scope, $element){
			var input = $element.find('input');
			$scope.model = false;
			input.val($scope.model);
			input.bind('change', function(event){
                $scope.model = input.is(':checked');
				$scope.$apply();
			});
		}
	};
});
