// gulp file js
    'use strict';
    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var cleanCSS = require('gulp-clean-css');
    var rename = require('gulp-rename');
// SCSS to CSS Converter 
    gulp.task('sass', function () {
        return gulp.src('assets/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
    });
// Watch task for SCSS
    gulp.task('sass:watch', function () {
        gulp.watch('assets/scss/styles.scss', ['sass']);
    });
// minify CSS
    gulp.task('minify-css', function() {
      return gulp.src('assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
    });
gulp.task('default', ['minify'], function() {

});