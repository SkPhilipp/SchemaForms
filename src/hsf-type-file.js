angular.module('hsf.directives').config(function factory(hsfElementProvider) {
	hsfElementProvider.register('file', 'hsf-type-file');
});

// TODO: validation error @ reader.onerror
angular.module('hsf.directives').directive('hsfTypeFile', function factory(hsfElementScope) {
	return {
		template:	'<div class="form-group">'
				+		'<label class="col-lg-3 control-label">{{ schema.title || schema.name }}</label>'
				+		'<div class="col-lg-9">'
                +			'<input type="file" class="form-control" id="{{ context.path }}"/>'
				+		'</div>'
				+	'</div>',
		scope: hsfElementScope,
		link: function postLink($scope, $element){
			var input = $element.find('input');
            input.bind('change', function(event){

				var reader = new FileReader();

    			reader.onloadend = function(event) {
    				var bytes = event.target.result.length;
    				if(event.target.readyState == FileReader.DONE){
						$scope.model = input.val();
						$scope.$apply();
        			}
    			};

                var file = event.target.files[0];
    			reader.readAsBinaryString(file);

            });

		}
	};
});

