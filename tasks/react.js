var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var minify = require('gulp-minify');
var fs = require("fs");
var babelify = require("babelify");

gulp.task('react', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
	return browserify({
		entries: camperSetup.reactPathHelper(appname).entry
	})
	.transform(babelify, {presets: ["es2015", "react"]})
	.bundle()
	.pipe(fs.createWriteStream(dest+"/bundle.js"));
})

gulp.task('minifyBuild',['react'], function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
  	gulp.src(dest+'/bundle.js')
    	.pipe(minify({
        	ext:{
            	src:'-debug.js',
            	min:'.js'
        	}
    	}))
    	.pipe(gulp.dest(dest))
});