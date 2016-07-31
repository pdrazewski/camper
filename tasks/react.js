var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var minify = require('gulp-minify');

gulp.task('react', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
	return browserify({
		entries: camperSetup.reactPathHelper(appname).entry
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest(dest))
})

gulp.task('minifyBuild',['react'], function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
  	gulp.src(dest+'/app.js')
    	.pipe(minify({
        	ext:{
            	src:'-debug.js',
            	min:'.js'
        	}
    	}))
    	.pipe(gulp.dest(dest))
});