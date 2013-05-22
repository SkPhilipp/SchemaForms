describe("array directive", function() {

	describe("array form containing strings", function() {

		// before each
		//	$scope.theschema = { type: 'array', kids:
		//		{ type: 'string' }
		//	};
		//	render

		it("creates a fieldset, containing add and remove buttons", function() {
			expect(true).toBe(true);
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
