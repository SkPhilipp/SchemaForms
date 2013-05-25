angular.module('hsf.directives').directive('hsfChoice', function factory($compile) {
	return {
		template:	'<div>'
				+		'<select>'
				+			'<option value="">Make your choice..</option>'
				+			'<option data-ng-repeat="choice in schema.choices" value="{{ choice.name }}">{{ choice.name }}</option>'
				+		'<select>'
				+		'<span>'
				+		'</span>'
				+	'</div>',
		transclude: true,
		restrict: 'A',
        scope: {
			schema: '=',
			model: '='
		},
		controller: function($scope){
			console.log("choice:", $scope.schema);
		},
		link: function postLink($scope, $element, $attrs){
			var select = $element.find('select');
			select.bind('change', function(event){
				console.log(select.val());
				// delete all choices
				for(i in $scope.schema.choices){
					var choice_name = $scope.schema.choices[i].name;
					delete $scope.model[choice_name];
				}
				// set up chosen
				$scope.chosen = select[0].selectedIndex - 1;
				var container = $element.find('span');
				container.children().remove();
				if($scope.chosen >= 0){
					var chosen_el = $compile('<div hsf-element schema="schema.choices[chosen]" model="model"/>')($scope);
					container.append(chosen_el);
				}
				$scope.$apply();
			});
		}
	};
});
