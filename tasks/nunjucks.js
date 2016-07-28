var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var notify = require("gulp-notify");
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();
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