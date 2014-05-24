var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    handleErrors = require('../util/handleErrors'),
    gulp = require('gulp');

module.exports = function () {
    return browserify('./src/app.js')
        .bundle({debug: true})
        .on('error', handleErrors)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build'));
}
