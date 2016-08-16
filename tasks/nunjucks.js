var camperSetup = require('../camperHelpers.js');
var gulp = require('gulp');
var notify = require("gulp-notify");
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var fs = require('fs');
gulp.task('compile', function() {
 	var appname = camperSetup.appHelper();
 	var dest = appname ? 'apps/'+appname+'/_dist' : 'camper/_dist';
	return gulp.src(camperSetup.htmlPathHelper(appname))
	.pipe(nunjucksRender({
		path: [
		'camper/_src/templates',
		'camper/_src/modules',
		'apps/'+appname+'/_src/templates'
		],
		manageEnv:function(env){
			var dataPath = appname ? 'apps/'+appname+'/_src/config.json' : 'camper/_src/config.json'; 
        	var data = JSON.parse(fs.readFileSync(dataPath));
			var fakerPath = appname ? 'apps/'+appname+'/_src/data/faker.json' : 'camper/_src/data/faker.json';
			var faker = JSON.parse(fs.readFileSync(fakerPath));
			var contentfulPath = appname ? 'apps/'+appname+'/_src/data/contentful.json' : 'camper/_src/data/contentful.json';
			var contentful = JSON.parse(fs.readFileSync(contentfulPath));
        	env.addGlobal('faker', faker);
			env.addGlobal('contentful', contentful);
			env.addGlobal('camper', data);
    	}
	}))
	.pipe(gulp.dest(dest))
});