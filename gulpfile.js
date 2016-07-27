var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bulkSass = require('gulp-sass-bulk-import');
var clean = require('gulp-clean');

// compile htmls
gulp.task('compile', function() {
 	var appname = false;
 	i = process.argv.indexOf("--app");
 	if(i>-1) {appname = process.argv[i+1]}
 	var dest = appname ? 'apps/'+appname+'/_dist' : 'camper/_dist';
	return gulp.src([
		'camper/_src/pages/**/*.+(html|nunjucks)',
		'apps/'+appname+'/_src/pages/**/*.+(html|nunjucks)'
		])
	.pipe(nunjucksRender({
		path: [
		'camper/_src/templates',
		'camper/_src/modules',
		'apps/'+appname+'/_src/templates'
		]
	}))
	.pipe(gulp.dest(dest))
});


// compile sass
gulp.task('sass', function () {
	var appname = false;
 	i = process.argv.indexOf("--app");
 	if(i>-1) {appname = process.argv[i+1]}
 	var dest = appname ? 'apps/'+appname+'/_dist/common/css/' : 'camper/_dist/common/css/';
 	var input;
 	if (appname) {
 		input = ['apps/'+appname+'/_src/_common/css/**/*.scss','apps/'+appname+'/_src/_common/css/*.scss']
 	} else {
 		input = ['camper/_src/_common/css/**/*.scss','camper/_src/_common/css/*.scss']
 	}
	return gulp
	   	.src(input)
	   	.pipe(sass({
		  errLogToConsole: true,
		  outputStyle: 'compressed'
		}).on('error', sass.logError))
	    .pipe(autoprefixer())
	    .pipe(gulp.dest(dest))
	    .resume()
});


gulp.task('sass-multi-import', function() {
	var appname = false;
 	i = process.argv.indexOf("--app");
 	if(i>-1) {appname = process.argv[i+1]}
 	var dest = appname ? 'apps/'+appname+'/_dist/common/css/' : 'camper/_dist/common/css/';
 	var input;
 	if (appname) {
 		input = ['apps/'+appname+'/_src/_common/css/assets.scss']
 		output = 'apps/'+appname+'/_src/_common/css/_imports.scss'
 	} else {
 		input = ['camper/_src/_common/css/assets.scss']
 		output = 'camper/_src/_common/css/_imports.scss'
 	}
 	console.log(input, output)
   return gulp
    .src(input)
    .pipe(bulkSass())
    .pipe(clean(output))
    .pipe(gulp.dest(output) );
});


// watch for everything
gulp.task('watch', function() {
	var appname = false;
 	i = process.argv.indexOf("--app");
 	if(i>-1) {appname = process.argv[i+1]}
	var inputHTML = [
	'camper/_src/pages/**/*.+(html|nunjucks)',
	'apps/'+appname+'/_src/pages/**/*.+(html|nunjucks)'
	]
	if (appname) {
 		inputCSS = ['apps/'+appname+'/_src/_common/css/**/*.scss','apps/'+appname+'/_src/_common/css/*.scss']
 	} else {
 		inputCSS = ['camper/_src/_common/css/**/*.scss','camper/_src/_common/css/*.scss']
 	}
  	gulp.watch(inputHTML, ['compile']);
    gulp.watch(inputCSS, ['sass-multi-import','sass']);
});


//js hint
//react-babel builds
//express server
//contentfull
//reload
//images sprite + pngmin
//it8 styles
//hash for cache images
//minify html
//ui
//menu dla stron
//errors nunjucks
//docs
//tests
//autoprefixer
//fixindent 
//jasmine
//stylize
//uglify
//scss-to-json