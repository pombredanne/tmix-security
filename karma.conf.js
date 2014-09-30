// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',
		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],
		// list of files / patterns to load in the browser
		files: [
			'test/bower_components/angular/angular.js',
			'test/bower_components/angular-mocks/angular-mocks.js',
			'test/bower_components/angular-resource/angular-resource.js',
			'test/bower_components/angular-cookies/angular-cookies.js',
			'test/bower_components/angular-sanitize/angular-sanitize.js',
			'test/bower_components/angular-route/angular-route.js',
			'tmix-security.js',
			'test/unit.js'
		],
		// setup coverage reporting
		preprocessors: {
			'tmix-security.js': ['coverage']
		},
		reporters: ['progress', 'coverage'],
		coverageReporter: {type: 'html', dir: 'test/coverage/'},
		// list of files / patterns to exclude
		exclude: [],
		// web server port
		port: 8080,
		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],
		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};
