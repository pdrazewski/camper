module.exports = {
	app: false, //type your app name
	appHelper: function() {
		if (this.app === false) {
			var appname = false;
	 		var i = process.argv.indexOf("--app");
	 		if (i > -1) {
	 			appname = process.argv[i+1]
	 		}
	 		return appname	
		} else {
			return this.app
		}
	},
	cssPathHelper: function(appname) {
		var input;
		if (this.app !== false) {
			var appname = this.app
		} 
	 	if (appname) {
	 		input = [
	 		'apps/'+appname+'/_src/_common/css/**/*.scss',
	 		'apps/'+appname+'/_src/_common/css/*.scss'
	 		]
	 	} else {
	 		input = [
	 		'camper/_src/_common/css/**/*.scss',
	 		'camper/_src/_common/css/*.scss'
	 		]
	 	}
	 	return input
	},
	htmlPathHelper: function(appname) {
		if (this.app !== false) {
			var appname = this.app
		} 
		var inputHTML = [
			'camper/_src/pages/**/*.+(html|nunjucks)',
			'apps/'+appname+'/_src/pages/**/*.+(html|nunjucks)'
		]
		return inputHTML
	},
	reactPathHelper: function(appname) {
		var input;
		var entry;
		if (this.app !== false) {
			var appname = this.app
		} 
	 	if (appname) {
	 		input = 'apps/'+appname+'/_src/modules/**/*.jsx';
	 		entry = 'apps/'+appname+'/_src/main.jsx';
	 		
	 	} else {
	 		input = 'camper/_src/modules/**/*.jsx';
	 		entry = 'camper/_src/main.jsx';
	 	}
	 	return {
	 		input: input,
	 		entry: entry
	 	}
	}
}
