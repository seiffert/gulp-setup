var gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    sass = require('gulp-sass');

module.exports = function () {
    return gulp.src('./scss/app.scss')
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(gulp.dest('./build/css'));
};
