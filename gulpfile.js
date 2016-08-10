var camperSetup = require('./camperHelpers.js');
var gulp = require('gulp');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
var tasks = requireDir('./tasks');
var path = require('path'); 

gulp.task('browser-sync', function() {
	var appname = camperSetup.appHelper();
	var dest = appname ? 'apps/'+appname+'/_dist/' : 'camper/_dist/';
    browserSync.init({
        browser: "google chrome",
        server: {
            baseDir: dest
        }
    });
});

gulp.task('copyJS', function() {
    var appname = camperSetup.appHelper();
    var dest = appname ? 'apps/'+appname+'/_dist/common/js/libs/' : 'camper/_dist/common/js/libs/';
    gulp.src(['*bower_components/**/*'])
    .pipe(gulp.dest(dest))
})
gulp.task('copyImages', function() {
    var appname = camperSetup.appHelper();
    var dest = appname ? 'apps/'+appname+'/_dist/common/images/' : 'camper/_dist/common/images/';
    var source = appname ? 'apps/'+appname+'/_src/_common/images/**/*' : 'camper/_src/_common/images/**/*';
    gulp.src(source)
    .pipe(gulp.dest(dest))
})

gulp.task('watch', function() {
	var appname = camperSetup.appHelper();
	var inputHTML = camperSetup.htmlPathHelper(appname);
	var inputCSS = camperSetup.cssPathHelper(appname);
    var inputReact = camperSetup.reactPathHelper(appname).input;
	var dest = appname ? 'apps/'+appname+'/_dist/' : 'camper/_dist/';
  	gulp.watch(inputHTML, ['compile']);
    gulp.watch(inputCSS, ['sass']);
    gulp.watch(inputReact, ['minifyBuild']);
    gulp.watch(dest+"/*.html").on('change', browserSync.reload);
    gulp.watch(inputReact).on('change', browserSync.reload);
    gulp.watch(dest+"/common/css/style.css").on('change', browserSync.reload);
});

gulp.task('default', ['copyJS','copyImages','compile','sass','minifyBuild','browser-sync','watch']);










