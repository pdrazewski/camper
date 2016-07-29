var camperSetup = require('./camperHelpers.js');
var gulp = require('gulp');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');

gulp.task('browser-sync', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/' : 'camper/_dist/';
    browserSync.init({
        server: {
            baseDir: dest
        }
    });
});

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













