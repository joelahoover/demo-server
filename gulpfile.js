var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var environments = require('gulp-environments');

var development = environments.development;
var production = environments.production;

gulp.task('build-js', function () {
  browserify('./browser/index.js', {
    transform: [
      ['browserify-shim', { global: true }]
    ],
    debug: development()
  })
    .bundle()
    .on('error', function(e) {
      console.log(e);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});
