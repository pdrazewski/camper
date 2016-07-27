// tasks
var camperSetup = require('./camperHelpers.js');
var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bulkSass = require('gulp-sass-bulk-import');
var clean = require('gulp-clean');

// compile htmls using nunjucks
gulp.task('compile', function() {
 	var appname = camperSetup.appHelper();
 	var dest = appname ? 'apps/'+appname+'/_dist' : 'camper/_dist';
	return gulp.src(camperSetup.htmlPathHelper(appname))
	.pipe(nunjucksRender({
		path: [
		'camper/_src/templates',
		'camper/_src/modules',
		'apps/'+appname+'/_src/templates'
		]
	}))
	.pipe(gulp.dest(dest))
});

// compile sass using gulp-sass and bulk-sass
gulp.task('sass', function () {
	var appname = camperSetup.appHelper();
 	var dest = appname ? 'apps/'+appname+'/_dist/common/css/' : 'camper/_dist/common/css/';
 	var input = camperSetup.cssPathHelper(appname);
	return gulp
	   	.src(input)
	   	.pipe(bulkSass())
	   	.pipe(sass({
		  errLogToConsole: true,
		  outputStyle: 'compressed'
		}).on('error', sass.logError))
	    .pipe(autoprefixer())
	    .pipe(gulp.dest(dest))
	    .resume()
});

// watch for everything
gulp.task('watch', function() {
	var appname = camperSetup.appHelper();
	var inputHTML = camperSetup.htmlPathHelper(appname);
	var inputCSS = camperSetup.cssPathHelper(appname);
  	gulp.watch(inputHTML, ['compile']);
    gulp.watch(inputCSS, ['sass']);
});





// # env
// express server + reload? + browsersync
// contentfull
// errors nunjucks
// menu dla stron
// docs
// ui
// minify html
// page-speed?

// #js
// js hint
// react-babel builds
// tests
// jasmine
// uglify


// #css
// google fonts?
// typekit?
// images sprite + pngmin
// ie8 styles''
// hash for cache images
// fixindent 
// stylize
// scss-to-json












