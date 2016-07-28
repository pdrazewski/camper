var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var notify = require("gulp-notify");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bulkSass = require('gulp-sass-bulk-import');
var clean = require('gulp-clean');
var gulpPostcss = require('gulp-postcss');
var cssdeclsort = require('css-declaration-sorter');
var browserSync = require('browser-sync').create();
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
	    .pipe(notify("Camper got a tank full of css"))
	    .resume()
});
