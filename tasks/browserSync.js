var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/' : 'camper/_dist/';
    browserSync.init({
        server: {
            baseDir: dest
        }
    });
});