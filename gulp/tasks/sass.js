var gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    sass = require('gulp-sass');

module.exports = function (debug) {
    return gulp.src('./scss/app.scss')
        .pipe(sass(debug ? { sourceComments: 'map' } : {}))
        .on('error', handleErrors)
        .pipe(gulp.dest('./build/css'));
};
