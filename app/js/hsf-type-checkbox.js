angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('bool', 'hsf-type-checkbox');
	hsfElementProvider.register('boolean', 'hsf-type-checkbox');
});

angular.module('hsf.directives').directive('hsfTypeCheckbox', function factory() {
	return {
		template:	'<div class="form-group">'
                +       '<div class="checkbox">'
                    +       '<label>'
                    +           '<input type="checkbox"> {{ schema.title || schema.name }}'
                    +       '</label>'
                +       '</div>'
				+	'</div>',
		scope: {
			model: '=',
			schema: '='
		},
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
