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
var gulpPostcss = require('gulp-postcss');
var cssdeclsort = require('css-declaration-sorter');
var jshint = require('gulp-jshint');
var notify = require("gulp-notify");


var contentful = require('contentful');
var client = contentful.createClient({
  space: 'm2t0hdt0zmhg',
  accessToken: '2aad12b0f84c025713502eb5a6bc66045e429358f2e2a4f008aac899b1e95e4e'
});



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
	.pipe(notify("Camper arrive with nunjacks"))
});

// compile sass using gulp-sass and bulk-sass
gulp.task('sass', function () {
	var appname = camperSetup.appHelper();
 	var dest = appname ? 'apps/'+appname+'/_dist/common/css/' : 'camper/_dist/common/css/';
 	var input = camperSetup.cssPathHelper(appname);
	return gulp
	   	.src(input)
	   	.pipe(gulpPostcss([cssdeclsort({order: 'smacss'})]))
	   	.pipe(bulkSass())
	   	.pipe(sass({
		  errLogToConsole: true,
		  outputStyle: 'compressed'
		}).on('error', sass.logError))
	    .pipe(autoprefixer())
	    .pipe(gulp.dest(dest))
	    .pipe(browserSync.stream())
	    .pipe(notify("Camper got a tank full of css"));
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

gulp.task('scss-sort', function () {
	var appname = camperSetup.appHelper();
 	var dest = appname ? 'apps/'+appname+'/_src/_common/css/' : 'camper/_src/_common/css/';
 	var input = camperSetup.cssPathHelper(appname);
	return gulp
	   	.src(input)
	   	.pipe(gulpPostcss([cssdeclsort({order: 'smacss'})]))
	    .pipe(gulp.dest(dest))
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

// default, starts with gulp command
gulp.task('default', ['browser-sync','watch']);






// # env
// contentfull - sprawdzam
// errors nunjucks
// menu dla stron
// docs
// ui
// minify html
// page-speed?

// #js
// js hint
// react-babel builds - https://jonsuh.com/blog/integrating-react-with-gulp/
// jasmine - https://syropia.net/journal/javascript-testing-with-jasmine-and-gulp-redux
// uglify
// show modules/blocks/pages/js bindings


// #css
// google fonts? - https://www.npmjs.com/package/gulp-google-webfonts
// typekit?
// images sprite + pngmin
// ie8 styles''
// hash for cache images
// scss-to-json
// css uncss
// gulp clean _dist from .scss files
// changed .https://github.com/sindresorhus/gulp-changed












