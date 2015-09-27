var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

var jsSource = [
  'web/js/*.js',
  'web/js/collections/*.js',
  'web/js/models/*.js',
  'web/js/routes/*.js',
  'web/js/views/*.js',
];

var sassSource = [
  'web/sass/*.sass'
];

gulp.task('sass', function(){
  gulp.src(sassSource)
    .pipe(sass())
      .pipe(concat('styles.css'))
        .pipe(uglify())
            .pipe(gulp.dest('web/css'))
});

gulp.task('js', function(){
  gulp.src(jsSource)
    .pipe(concat('global.js'))
        .pipe(uglify())
            .pipe(gulp.dest('web/js/product'))
});

gulp.task("watch", function(){
  gulp.watch(sassSource, ['sass']);
  gulp.watch(jsSource, ['js']);
});

gulp.task('default', function() {
    gulp.start('watch', 'sass', 'js');
});
