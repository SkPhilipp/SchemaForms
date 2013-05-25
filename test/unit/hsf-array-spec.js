describe("array directive", function() {

	beforeEach(module('hsf.directives'));

	describe("array form containing strings", function() {

		it("creates a fieldset, containing add and remove buttons", function() {

			inject(function($compile, $rootScope) {

				var scope = $rootScope.$new();
				scope.theschema = { type: 'array', name: 'b', title: 'Outer Array', kids:
					{ type: 'array', title: 'Inner Array', min: 2, max: 4, kids:
						{ type: 'object', fields: [
							{ type: 'string', name: 'x' },
							{ type: 'string', name: 'y' },
							{ type: 'string', name: 'z' }
						]}
					}
				};

				scope.thehandler = function(object){
					console.log(object);
				};

				var element = $compile('<div hsf-form schema="theschema" handler="thehandler"/></div>')(scope);

				expect(element.html()).toContain('fieldset');
				expect(element.text()).toContain('Add');
				expect(element.text()).toContain('Remove');

			});

		});

		it("creates a form with buttons to add and remove elements", function() {
			// press + the button, array length should increase
			// press - the button, array length should decrease
			expect(true).toBe(true);
		});

		it("renders all child elements", function() {
			// press + the button, an input field should appear
			// press - the button, an input field should disappear
			expect(true).toBe(true);
		});

		it("links the elements to the result object", function() {
			// press + the button, array length should increase
			// press + the button, array length should increase
			// set input field 1 value to X
			// set input field 2 value to Y
			// expect result == [X, Y]
			expect(true).toBe(true);
		});

	});

	describe("array form containing arrays of strings", function() {

		// before each
		//	$scope.theschema = { type: 'array', min: 2, kids:
		//		{ type: 'array', min: 3, kids:
		//			{ type: 'string' }
		//		}
		//	};
		//	render

		it("creates a form with fieldsets for the outer aswel as the innner array", function() {
			expect(true).toBe(true);
		});

		it("links the elements in the inner arrays to the result object", function() {
			// press + the button, array length should increase
			// press + the button, array length should increase
			// set input field 1 value to X
			// set input field 2 value to Y
			// expect result == [X, Y]
			expect(true).toBe(true);
		});

	});

});
