var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// gulp.task('react', function () {
//   var appname = camperSetup.appHelper();
//   var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
//   return gulp.src(camperSetup.reactPathHelper(appname))
//         .pipe(react({harmony: false, es6module: true}))
//         .pipe(gulp.dest(dest));
// }); 


gulp.task('react', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
	return browserify({
		entries: camperSetup.reactPathHelper(appname).entry,
		debug: true
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest(dest))
})