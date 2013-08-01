// TODO: new $scope item: context

angular.module('hsf.directives', []);

angular.module('hsf', ['hsf.directives']);

/**
 * HSF Element Provider
 *
 * Here types are mapped.
 */
angular.module('hsf.directives').provider('hsfElement', function() {

    var that = this;
    var map = {};

    this.register = function(key, value){
        if(map[key] != undefined){
            console.warn('overwriting: ', key);
        }
        map[key] = value;
    };

    this.get = function(key){
        if(map[key] == undefined){
            console.warn('not found: ', key);
        }
        return map[key];
    };

    this.$get = function() {return that};

});

/**
 * HSF Form Directive
 */
angular.module('hsf.directives').directive('hsfForm', function factory() {
    return {
        template:	'<div class="form-horizontal">'
                +		'<div hsf-element schema="schema" model="result"></div>'
                +       '<div class="form-group">'
                +		    '<div class="col-lg-10">'
                +		        '<button class="btn btn-default" ng-disabled="!enabled" ng-click="handler(result)">Submit</button>'
                +		    '</div>'
                +	    '</div>'
                +	'</div>',
        restrict: 'EA',
        scope: {
            schema: '=',
            handler: '=',
            enabled: '='
        },
        controller: function($scope){
            $scope.result = {};
            if($scope.enabled == undefined){
                $scope.enabled = true;
            }
        }
    };
});

/**
 * HSF Element Directive
 */
angular.module('hsf.directives').directive('hsfElement', function factory($compile, hsfElement) {
    return {
        scope: {
            schema: '=',
            model: '='
        },
        compile: function($element){
            $element.contents().remove();
            return function($scope, $element){
				console.debug($scope.schema);
                var directive = hsfElement.get($scope.schema.type);
                var template = '<div ' + directive + ' model="model' + ( $scope.schema.name == undefined ? '' : '[schema.name]' ) + '" schema="schema"></div>';
                var compiled = $compile(template)($scope);
                $element.append(compiled);
            };
        }
    };
});
