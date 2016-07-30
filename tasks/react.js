var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react', function () {
  var appname = camperSetup.appHelper();
  var dest = appname ? 'apps/'+appname+'/_dist/common/js' : 'camper/_dist/common/js';
  return gulp.src(camperSetup.reactPathHelper(appname))
        .pipe(react({harmony: false, es6module: true}))
        .pipe(gulp.dest(dest));
}); 