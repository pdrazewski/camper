var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
  	return gulp.src(['camper/_src/pages/**/*.+(html|nunjucks)'])
  	.pipe(nunjucksRender({
		path: ['camper/_src/templates']
  	}))
  	.pipe(gulp.dest('camper/_dist'))
});

gulp.task('app', function() {
	var appname, i = process.argv.indexOf("--is");
	if(i>-1) {appname = process.argv[i+1]}
  	return gulp.src([
  		'camper/_src/pages/**/*.+(html|nunjucks)',
  		'apps/'+appname+'/_src/pages/**/*.+(html|nunjucks)'
  		])
  	.pipe(nunjucksRender({
		path: [
		'camper/_src/templates',
		'apps/'+appname+'/_src/templates'
		]
  	}))
  	.pipe(gulp.dest('apps/'+appname+'/_dist'))
});

//scss
//js hint
//react-babel builds
//express server
//contentfull
//watch + reload
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