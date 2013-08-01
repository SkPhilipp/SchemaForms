basePath = '../';

/*
 * the files array is also the order in which stuff will be loaded,
 * so first angularjs, angularjs testing utilities, hsf.js, hsf extensions, and finally all tests.
 */
files = [
	JASMINE,
	JASMINE_ADAPTER,
	'app/lib/angular/angular.js',
	'app/lib/angular/angular-*.js',
	'test/lib/angular/angular-mocks.js',
	'app/js/hsf.js',
	'app/js/**/*.js',
	'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
	outputFile: 'test_out/unit.xml',
	suite: 'unit'
};
