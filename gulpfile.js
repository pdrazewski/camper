var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

// compile
gulp.task('compile', function() {
 	var appname = false;
 	i = process.argv.indexOf("--app");
 	if(i>-1) {appname = process.argv[i+1]}
 		console.log(appname)
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

// watch for everything
gulp.task('watch', function() {
	var appname = false;
 	i = process.argv.indexOf("--app");
 	if(i>-1) {appname = process.argv[i+1]}
	var input = [
	'camper/_src/pages/**/*.+(html|nunjucks)',
	'apps/'+appname+'/_src/pages/**/*.+(html|nunjucks)'
	]
  	return gulp
    	.watch(input, ['compile'])
});

//scss
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