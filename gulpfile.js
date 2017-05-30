var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var environments = require('gulp-environments');
var gls = require('gulp-live-server');

var development = environments.development;
var production = environments.production;

gulp.task('default', ['build']);

gulp.task('build', ['build-js']);

gulp.task('build-js', function () {
  browserify('./browser/index.js', {
    transform: [
      ['browserify-shim', { global: true }]
    ],
    debug: development()
  })
    .bundle()
    .on('error', function(e) {
      gutil.log(gutil.colors.red("Error in browserify while building javascript bundle:"));
      console.log(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./browser/*.js', './node_modules/nomv/*'], ['build-js']);
});

gulp.task('serve', function() {
  var server = gls('server.js', {env: {NODE_ENV: 'development'}});
  server.start();

  // Use gulp.watch to trigger live reload
  gulp.watch(['dist/*.js', 'views/index.html'], function (file) {
    server.notify.apply(server, [file]);
  });

  // Restart the server if server.js changes
  gulp.watch('server.js', function() {
    server.start.bind(server)()
  });
});
