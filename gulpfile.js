// tasks
var camperSetup = require('./camperHelpers.js');
var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bulkSass = require('gulp-sass-bulk-import');
var clean = require('gulp-clean');
var server = require('gulp-express');
var browserSync = require('browser-sync').create();

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
	.pipe(browserSync.stream())
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
	    .pipe(browserSync.stream())
	    .resume()
});

// Static server
gulp.task('browser-sync', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/' : 'camper/_dist/';
    browserSync.init({
        server: {
            baseDir: dest
        }
    });
});

// watch for everything
gulp.task('watch', function() {
	var appname = camperSetup.appHelper();
	var inputHTML = camperSetup.htmlPathHelper(appname);
	var inputCSS = camperSetup.cssPathHelper(appname);
	var dest = appname ? 'apps/'+appname+'/_dist/' : 'camper/_dist/';
  	gulp.watch(inputHTML, ['compile']);
    gulp.watch(inputCSS, ['sass']);
    gulp.watch(dest+"/*.html").on('change', browserSync.reload);
    gulp.watch(dest+"/common/css/style.css").on('change', browserSync.reload);
});


gulp.task('default', ['browser-sync','watch']);






// # env
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












