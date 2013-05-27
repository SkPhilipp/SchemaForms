angular.module('hsf.directives').directive('hsfChoice', function factory($compile) {
	console.log("CHOICE", this);
	return {
		template:	'<div class="control-group">'
				+		'<label class="control-label">{{ schema.title || schema.name }}</label>'
				+		'<div class="controls">'
				+			'<select>'
				+				'<option value=""></option>'
				+				'<option data-ng-repeat="choice in schema.choices" value="{{ choice.name }}">{{ choice.title || choice.name }}</option>'
				+			'</select>'
				+		'</div>'
				+		'<span></span>'
				+	'</div>',
        scope: {
			schema: '=',
			model: '='
		},
		link: function postLink($scope, $element, $attrs){
			var select = $element.find('select');
			select.bind('change', function(event){
				// delete all choices
				for(i in $scope.schema.choices){
					var choice_name = $scope.schema.choices[i].name;
					delete $scope.model[choice_name];
				}
				// set up chosen
				// TODO: test whether this is cross browser compatible
				$scope.chosen = select[0].selectedIndex - 1;
				// TODO: this needs an alternative
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
