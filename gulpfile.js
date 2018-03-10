var gulp        = require('gulp');
var gutil        = require('gulp-util');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var vueify      = require('vueify');
var source      = require('vinyl-source-stream');

var webserver   = require('./src/server/webserver.js');

gulp.task('browserify', function(callback) {
    var bundler = browserify({
        // Required watchify args
        cache: {}, packageCache: {}, fullPaths: false,
        // Specify the entry point of your app
        entries: 'src/client/scripts/main.js',
        debug:true,
        plugin: [watchify],
        extensions: ['js']
    });
    bundler.transform(babelify.configure({presets: ["es2015"]}));
    bundler.transform(vueify);

    var bundle = function(){
        bundler
            .bundle()
            .on('error', function(err){gutil.log(err.message)})
            .pipe(source('app.js'))
            // Specify the output destination
            .pipe(gulp.dest('src/client/wwwroot'));
    };

    bundler.on('update', bundle);
    bundle();

});

gulp.task('webserver', function() {
    webserver.start();
});

gulp.task('default', ['browserify', 'webserver']);
